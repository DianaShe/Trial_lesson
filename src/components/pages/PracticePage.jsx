import { useState } from "react";
import mountain from "../../assets/mountain.jpg";
import Banner from "../Banner";
import Task from "../Task";
import ButtonNext from "../ButtonNext";
import { chapters } from "../../data";
import { sentences } from "../../data";

const PracticePage = () => {
  const [answers, setAnswers] = useState(Array(sentences.length).fill(""));

  const selectedValues = answers.filter(Boolean);

  const shuffled = sentences.map(s => s.correct).sort(() => Math.random() - 0.5);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const getSelectClass = (index) => {
    if (!answers[index]) return "outline-gray-300";

    return answers[index] === sentences[index].correct
      ? "outline-green-500 bg-green-50"
      : "outline-red-500 bg-red-50";
  };
  return (
    <>
      <Banner img={mountain} />
      <Task task="Choose the correct options. Say if you agree or disagree with the
        statements" />
      <ol className="list-decimal text-start pl-4">
        {sentences.map((s, i) => (
          <li key={i} className="mb-2">
            <p className="flex flex-wrap items-baseline gap-x-2 w-full">
              <span>{s.before}</span>
              <select
                value={answers[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                
                className={`outline rounded-sm px-1 mb-2 min-w-16 shrink-0 ${getSelectClass(i)}`}
              >
                <option value="" hidden>
                  Select
                </option>

                {shuffled.map((opt) => (
                  <option
                    key={opt}
                    value={opt}
                    disabled={
                      selectedValues.includes(opt) && answers[i] !== opt
                    }
                  >
                    {opt}
                  </option>
                ))}
              </select>
              <span className="min-w-0 break-normal">{s.after}</span>
            </p>
          </li>
        ))}
      </ol>
      <ButtonNext path={chapters[4].path} title={chapters[4].title}/>
    </>
  );
};

export default PracticePage;
