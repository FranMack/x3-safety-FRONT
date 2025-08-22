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
      const data= await response.json()

      
      return data
    } catch (error) {
      throw error;
    }
  }
}
