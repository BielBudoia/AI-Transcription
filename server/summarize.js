import { pipeline } from "@xenova/transformers"
import { summaryExample } from "./utils/summary.js"

export async function summarize(text){
  try{
 // return summaryExample

  console.log("summarizing")

  const generator = await pipeline(
    "summarization",
    "Xenova/distilbart-cnn-12-6"
     )
  }catch (error){
    console.log("Was not possible finish the summary!")
    throw new Error(error)
  }
}
