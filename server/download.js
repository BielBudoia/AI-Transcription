import ytdl from 'ytdl-core'
import fs from 'fs'
import { resolve } from 'path'

export const download = (videoId) => new Promise((resolve, reject) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log('Video Downloading:', videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
  .on("info", (info) => {
      const seconds = info.formats[0].approxDurations / 1000

      if(seconds > 60) {
        throw new Error("The video duration is longer than 60s")
      }
    })
    .on("end", () => {
      console.log("Video download finished")
    })
    .on ("error", (error) => {
      console.log(
        "Was not possible download the video. Error details:", 
        error
      )
    })
    .pipe(fs.createWriteStream('./tmp/audio.mp4'))
})