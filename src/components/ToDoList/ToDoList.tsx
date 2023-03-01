import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { ToDoItem } from '../ToDoItem/ToDoItem';

import './style.css';

export const ToDoList: FC = () => {
  const list = useAppSelector((state) => state.todos.list);

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {list &&
          list.map((item) => (
            <ToDoItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              completed={item.completed}
            />
          ))}
      </table>
    </div>
  );
};
