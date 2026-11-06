import { envs } from "@/config/envs";

interface QuestionProps{
    userId:string;
    question:string
}

export class AssistantService {
  static async sendQuestion(questionInfo:QuestionProps) {
    try {
     const response= await fetch(`${envs.API_DOMAIN}/api/assistant/chat`, {
        method: "POST",
        body: JSON.stringify(questionInfo),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      // La API puede devolver un string o un objeto (p. ej. un error): siempre devolvemos string
      if (typeof data === "string") return data;
      const text = data?.message ?? data?.response ?? data?.text ?? data?.error;
      return typeof text === "string"
        ? text
        : "Lo siento, no pude procesar tu consulta. Intentá nuevamente.";
    } catch (error) {
      throw error;
    }
  }
}
