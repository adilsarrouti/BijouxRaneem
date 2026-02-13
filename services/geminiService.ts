
import { GoogleGenAI } from "@google/genai";
import { StylistMessage, Language } from "../types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStylingAdvice = async (history: StylistMessage[], lang: Language) => {
  const instructions = {
    ar: "أنت المستشار الملكي لـ مجوهرات رنيم. تحدث بلباقة وفخامة.",
    fr: "Vous êtes le Conseiller Royal de Bijoux Raneem. Parlez avec élégance et prestige en français.",
    en: "You are the Royal Stylist for Bijoux Raneem. Speak with elegance and prestige in English."
  };

  try {
    // Always use ai.models.generateContent to query GenAI with both the model name and prompt/contents.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      config: {
        systemInstruction: `${instructions[lang]} Store based in Benslimane, Morocco. High-end tone. Assisting with jewelry and watches.`,
        temperature: 0.7,
      }
    });

    // The GenerateContentResponse object features a text property (not a method).
    return response.text;
  } catch (error) {
    console.error("AI Stylist Error:", error);
    return lang === 'ar' ? "عذراً" : lang === 'fr' ? "Désolé" : "Sorry";
  }
};
