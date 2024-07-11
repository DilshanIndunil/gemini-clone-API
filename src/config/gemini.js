import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [
                {
                    role: "user",
                    parts: [{ text: prompt }],
                },
            ],
        });

        const result = await chatSession.sendMessage(prompt);
        const responseText = await result.response.text(); // Await the text() promise
        console.log(responseText);
        return responseText;
    } catch (error) {
        console.error("Error running chat session:", error);
        throw error;
    }
}

export default run;
