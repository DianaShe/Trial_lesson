import { useState } from "react";
import Task from "../Task";
import ButtonNext from "../ButtonNext";
import { chapters } from "../../data";
import ToggleTrueFalse from "../ToggleTrueFalse";
import { trueOrFalse } from "../../data";

const VideoPage = () => {
  const [answers, setAnswers] = useState(
  Array(trueOrFalse.length).fill(null)
);
const [checked, setChecked] = useState(false);

const getLiClass = (index) => {
  if(!checked) return "";
  return answers[index] === trueOrFalse[index].correct
    ? "border border-green-500"
    : "border border-red-500";
};

  return (
    <>
    <div className="aspect-w-16 aspect-h-9 w-full h-80 mb-10">
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/y8efjRUszIw"
        title="Lesson 0 GE A2"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <Task task='Listen to the radio show and mark choose if the statement is true or false.' />
    {trueOrFalse.map((item, index) => (
        <div key={index} className={`p-2 rounded-lg mb-4 flex items-center justify-between gap-6 ${getLiClass(index)}`}>
    <p className="flex-1 text-start">{item.text}</p>

    <ToggleTrueFalse
      value={answers[index]}
      onChange={(val) => {
          if (checked) return;
          setAnswers((prev) => {
            const updated = [...prev];
            updated[index] = val;
            return updated;
          });
        }}
    />
  </div>
      ))}
      <button
  onClick={() => setChecked(true)}
  disabled={checked}
  className="mt-6 px-6 py-2 rounded-lg mr-6 border-2 border-b-emerald-600 text-emerald-500 bg-white
             disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border-0 disabled:text-white"
>
  Check answers
</button>
      <ButtonNext path={chapters[5].path} title={chapters[5].title}/>
    </>
  );
};

export default VideoPage;
