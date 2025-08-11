interface Props {
  text: string;
}

export const MyMessage = ({ text }: Props) => {
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-16 w-16 text-[1.5rem] rounded-full bg-indigo-500 text-white flex-shrink-0">
          V
        </div>
        <div className="relative max-w-[82%] mr-3 text-[1.2rem] bg-indigo-700 py-2 px-4 shadow rounded-xl text-white">
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};
