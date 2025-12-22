const ToggleTrueFalse = ({ value, onChange }) => {
    const bgClass =
    value === null
      ? "bg-gray-300"
      : value
      ? "bg-green-500"
      : "bg-red-400";

  const knobClass =
    value === null
      ? "translate-x-2 md:translate-x-4"
      : value
      ? "translate-x-3.5 md:translate-x-7"
      : "translate-x-0.5";

  return (
    <div className="flex items-center gap-3 select-none">
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`text-xs font-semibold transition
          ${
            value === false
              ? "text-red-500 underline"
              : "text-gray-400 hover:text-red-400"
          }
          disabled:cursor-not-allowed`}
      >
        FALSE
      </button>

      <button
        type="button"
        onClick={() =>
          onChange(value === null ? true : !value)
        }
        className={`relative h-4 w-7 md:w-14 md:h-7 rounded-full transition-colors duration-300
          ${bgClass} disabled:cursor-not-allowed`}
      >
        <span
          className={`absolute top-0.5 left-0 w-3 md:w-6 h-3 md:h-6 bg-black rounded-full transition-transform duration-300 ${knobClass}`}
        />
      </button>

      <button
        type="button"
        onClick={() => onChange(true)}
        className={`text-xs font-semibold transition
          ${
            value === true
              ? "text-green-600 underline"
              : "text-gray-400 hover:text-green-500"
          }
          disabled:cursor-not-allowed`}
      >
        TRUE
      </button>
    </div>
  );
};
export default ToggleTrueFalse;