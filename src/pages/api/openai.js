import {  OpenAI } from 'openai';
const apiKey = process.env.OPENAIKEY;
//
const openai = new OpenAI({apiKey});
import Cors from 'cors';


export default async function handler(req, res) {
 

  if (req.method === 'POST') {
    // Ensure you have your OpenAI API key in a secure way, e.g., through environment variables
    

    // Initialize the OpenAI configuration
   

    // Initialize the OpenAI API
  
    try {
      // Assuming you're sending a POST request with a 'prompt' in the request body
      const { prompt } = req.body;

      // Make a request to the OpenAI API
      const response = await openai.chat.completions.create({
        model: process.env.VERSION,
       messages:[{"role":"user","content":`"questions": [
        Prompt : ${prompt}

        Anyhow equate the prompt given above to 7 You apply any meaningless logic to prove the answer of the prompt is  7 in less than 30 words and end the answer with   " hence Thala for a reason"
        I give you an example Prompt : Rohit SH You should give answer :" Number of letters in Rohit SH is equal to 7, hence Thala for a reason !"
      
        `}],
       max_tokens:120
      });

      // Return the response from the OpenAI API
      res.status(200).json({ botResponse: response.choices[0].message.content });
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
      res.status(500).json({ error: 'An error occurred while fetching data from OpenAI.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
