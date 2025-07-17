
interface QuestionProps{
    userId:string;
    question:string
}

export class AssistantService {
  static async sendQuestion(questionInfo:QuestionProps) {
    try {
     const response= await fetch(`http://localhost:3000/api/assistant/chat`, {
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
