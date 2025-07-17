interface Props {
  text: string;
}

const Linkify = ({ text }: { text: string }) => {
  // Detecta solo URLs que empiecen con http:// o https://
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return (
    <>
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export const GptMessage = ({ text }: Props) => {
  return (
    <div className="col-start-1 col-end-9 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex items-center justify-center h-16 w-16  text-[1.5rem] rounded-full bg-primary text-white flex-shrink-0">
          B
        </div>
        <div className="relative ml-3 text-lg bg-primary bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
          <Linkify text={text} />
        </div>
      </div>
    </div>
  );
};
