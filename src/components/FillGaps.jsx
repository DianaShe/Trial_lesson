import { useRef, useState } from "react";

const FillGaps = ({phrases}) => {

  const [values, setValues] = useState(Array(phrases.length).fill(""));
  const [isCorrectArr, setIsCorrectArr] = useState(
    Array(phrases.length).fill(null)
  );

  const timers = useRef([]);

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);

    clearTimeout(timers.current[index]);

    timers.current[index] = setTimeout(() => {
      const isCorrect = value.trim().toLowerCase() === phrases[index].phrase;

      const updatedCorrect = [...isCorrectArr];
      updatedCorrect[index] = isCorrect;
      setIsCorrectArr(updatedCorrect);
    }, 900);
  };

  return (
    <div>
      {phrases.map((item, index) => {
        const value = values[index];
        const isCorrect = isCorrectArr[index];

        return (
          <li key={item.id}>
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              className={`
              mb-4 ml-2 outline-2 rounded-sm mr-2 text-center
              outline-gray-300 hover:outline-emerald-600 focus:outline-emerald-600
              ${isCorrect === true ? "outline-green-600! bg-green-50" : ""}
              ${isCorrect === false ? "outline-red-600! bg-red-50" : ""}
            //   
            `}
            />
            <p className="inline">{item.explanation}</p>
          </li>
        );
      })}
    </div>
  );
};

export default FillGaps;
