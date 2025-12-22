import { useState } from "react";

const Form = () => {
  const options = [
    { id: 1, label: "Work" },
    { id: 2, label: "Study" },
    { id: 3, label: "Communication" },
    { id: 4, label: "Relocation" },
    { id: 5, label: "Other" },
  ];

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
  });

  const [checkedItems, setCheckedItems] = useState([]);
  const [consent, setConsent] = useState(false);

  const handleChange = (value) => {
    setCheckedItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      user_name: formData.userName,
      user_email: formData.email,
      reasons: checkedItems.join(", "),
    };
    console.log(userInfo);

    setCheckedItems([]);
    setFormData({
      userName: "",
      email: "",
    });
    setConsent(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-neutral-200 rounded-lg p-6 text-lg"
    >
      <label className="text-start">
        Your name
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChangeInput}
          required
          className="w-full p-2 rounded mt-1 border bg-white"
        />
      </label>

      <label className="text-start">
        Your email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeInput}
          required
          className="w-full p-2 rounded mt-1 border bg-white"
        />
      </label>

      <p className="font-medium text-start">Why do you learn English?</p>

      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center gap-3 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={checkedItems.includes(option.label)}
            onChange={() => handleChange(option.label)}
            className="w-5 h-5 rounded accent-emerald-600"
          />
          <span>{option.label}</span>
        </label>
      ))}

      <label className="flex items-center gap-3 cursor-pointer text-xs">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="w-3 h-3 rounded accent-emerald-600"
        />
        <span>
          I agrre to process the given personal information by the third patry.
        </span>
      </label>

      <button
        type="submit"
        className="self-center mt-4 bg-emerald-600 text-white py-2 px-6 rounded hover:bg-emerald-700 transition"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
