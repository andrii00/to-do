import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleComplete, toggleModal } from '../../store/todoSlice';

import './style.css';

export const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { modalActive, modalTodo } = useAppSelector((state) => state.todos);

  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  const handleChangeStatus = () => {
    dispatch(toggleComplete(modalTodo.id));
  };
  return (
    <div
      className={modalActive ? 'modal active' : 'modal'}
      onClick={closeModal}
    >
      <div
        className={modalActive ? 'modal-content active' : 'modal-content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="content">
            <div className="content-title">
              <h2>
                {modalTodo.id} - {modalTodo.title}
              </h2>
            </div>
            <div className="content-text">
              <span>Description: </span>
              {modalTodo.description}
            </div>
            <div>
              <span>Status: </span>
              <input
                type="checkbox"
                checked={modalTodo.completed}
                onChange={handleChangeStatus}
              />
            </div>
            <button className="close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
