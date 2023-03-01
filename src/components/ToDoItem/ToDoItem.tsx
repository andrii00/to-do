import { FC } from 'react';
import { useAppDispatch } from '../../hooks';
import { Todo } from '../../models';
import { setTodoToModal, toggleModal } from '../../store/todoSlice';
import './style.css';

export const ToDoItem: FC<Todo> = ({ id, title, description, completed }) => {
  let sliceTitle = title.slice(0, 15);

  let sliceDescription = description.slice(0, 30);

  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(toggleModal(true));
    dispatch(setTodoToModal({ id, title, description, completed }));
  };

  return (
    <tr className="to-do-item" onClick={openModal}>
      <td>{id}</td>
      <td>{sliceTitle}...</td>
      <td>{sliceDescription}...</td>
      <td>
        <input type="checkbox" checked={completed} />
      </td>
    </tr>
  );
};
