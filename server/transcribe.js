import { Pipeline } from "@xenova/transformers"
import {transcriptionExample} from "./utils/transcription.js"

export async function transcribe() {
 try{
  // return transcriptionExample

  console.log("Starting Transcription")
  const transcribe = await pipeline(
    "automatic-speech-recognition",
    "Xenova/whisper-small"
  )

  const transcription = await transcribe(audio, {
    chunk_length_s: 30,
    stride_length_s:5,
    language: "english",
    task: "transcribe",
  })

  console.log("Transcription finished succesfuly")
  return transcription?.text.replace("Music", "")
 } catch (error){
  throw new Error(error)
 }
 
}