import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  content.classList.remove("placeholder")

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "This video not seens a Short")
  }

  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Downloading video..."

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = "Resuming..."

 /* const summary = await server.post("/summary", {
    text: transption.data.result,
  })*/

  content.textContent = transption.data.result
  content.classList.remove("placeholder")
})
