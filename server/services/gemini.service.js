import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const askAi = async (prompt) => {
  try {
    if (!prompt) {
      throw new Error("Prompt missing");
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log("FULL GROQ ERROR =>");
    console.log(error);

    throw error;
  }
};
