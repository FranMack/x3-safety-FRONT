"use client";
import { CrossIcon } from "@/icons/icons";
import { useContext, useEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { AssistantChatContext } from "@/context/assistantChat.contex";
import { GptMessage } from "./components/GptMessage";
import { MyMessage } from "./components/MyMessage";
import { AssistantService } from "./services/assistantService";

interface MessageProps {
  text: string;
  isGpt: boolean;
}

const initialValue: MessageProps[] = [
  {
    text: "Hola, soy tu asistente virtual, ¿ en que puedo ayudarte?",
    isGpt: true,
  },
];

const messagesInlocalStorage = sessionStorage.getItem("thread-messages");

const init = messagesInlocalStorage
  ? JSON.parse(messagesInlocalStorage)
  : initialValue;

export const AssistantChat = () => {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageProps[]>(init);

  const { assistantChat, toggleAssistantChat } =
    useContext(AssistantChatContext);

  const handlePost = async () => {
    if (!message) {
      return;
    }
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: message, isGpt: false }]);
    setMessage("");

    let messagesInSessionStorage = JSON.parse(
      sessionStorage.getItem("thread-messages") ?? "[]"
    );

    messagesInSessionStorage.push({ text: message, isGpt: false });

    sessionStorage.setItem(
      "thread-messages",
      JSON.stringify(messagesInSessionStorage)
    );

    //TODO
    const gptResponse = await AssistantService.sendQuestion({
      userId: "123",
      question: message,
    });
    setMessages((prev) => [...prev, { text: gptResponse, isGpt: true }]);

    messagesInSessionStorage = JSON.parse(
      sessionStorage.getItem("thread-messages") ?? "[]"
    );

    messagesInSessionStorage.push({
      text: gptResponse,
      isGpt: true,
    });

    sessionStorage.setItem(
      "thread-messages",
      JSON.stringify(messagesInSessionStorage)
    );

    setIsLoading(false);
  };

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-full w-full flex justify-center">
      <div
        className={`pb-5 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[25vw] h-[75vh] max-h-[600px] flex flex-col justify-between items-center bg-gray-200 rounded-xl fixed bottom-5 right-5 z-50 shadow-xl ${
          assistantChat ? "translate-x-0" : "translate-x-[200vw]"
        } transition-transform duration-700`}
      >
        <div className="w-full h-5 flex justify-end items-center pr-1">
          <CrossIcon onClick={toggleAssistantChat} />
        </div>
        <div className="w-[85%] h-[75%] bg-white rounded-xl overflow-y-scroll ">
          {messages.map((item, i) => {
            if (item.isGpt) {
              return <GptMessage key={i} text={item.text} />;
            }
            return <MyMessage key={i} text={item.text} />;
          })}
          <div ref={bottomRef}></div>
        </div>
        <div className="w-[85%] h-[10%] flex items-center justify-between">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isLoading) {
                e.preventDefault();
                handlePost();
              }
            }}
            autoFocus
            type="text"
            placeholder="Escribe tu consulta"
            className="h-full w-[75%] outline-none rounded-md pl-2 text-[1.2rem]"
          />
          <button
            onClick={handlePost}
            disabled={isLoading ? true : false}
            className="text-white text-[1.3rem] bg-primary h-full px-2 rounded-md flex items-center"
          >
            {isLoading ? (
              <BeatLoader color={"white"} size={10} speedMultiplier={0.4} />
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
