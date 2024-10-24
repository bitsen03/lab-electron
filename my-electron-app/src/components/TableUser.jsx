import { useState } from "react";
import UserForm from "./UserForm";
import Modal from "./Modal";

export default function TableUser() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Добавить пользователя</button>

      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Пол</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.sex}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <UserForm setUsers={setUsers} users={users} onClose={closeModal} />
      </Modal>
    </>
  );
}
