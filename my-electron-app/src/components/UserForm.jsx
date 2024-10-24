import { useState } from "react";

function UserForm({ setUsers, users, onClose }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("Мужской");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { name, age: Number(age), sex }]);

    setName("");
    setAge("");
    setSex("Мужской");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Возраст:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>Пол:</label>
        <label>
          <input
            type="radio"
            value="Мужской"
            checked={sex === "Мужской"}
            onChange={() => setSex("Мужской")}
          />
          Мужской
        </label>
        <label>
          <input
            type="radio"
            value="Женский"
            checked={sex === "Женский"}
            onChange={() => setSex("Женский")}
          />
          Женский
        </label>
      </div>
      <button type="submit">Добавить пользователя</button>
    </form>
  );
}

export default UserForm;
