import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../store/todoSlice';
import './style.css';

export const Form: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [titleError, setTitleError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (title.trim().length && description.trim().length) {
      dispatch(addTodo({ title: title, description: description }));
      setTitle('');
      setDescription('');
      setTitleError(false);
      setDescriptionError(false);
    }
    if (title.trim().length === 0) {
      setTitleError(true);
    } else if (title.trim().length > 0) {
      setTitleError(false);
    }
    if (description.trim().length === 0) {
      setDescriptionError(true);
    } else if (description.trim().length > 0) {
      setDescriptionError(false);
    }
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(e.target.value);
  };

  return (
    <form className="form-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={onTitleChange}
          className={titleError ? 'title-input' : ''}
        />
        {titleError && (
          <div className="error-description">This field is empty</div>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={onDescriptionChange}
          className={descriptionError ? 'description-input' : ''}
        />
        {descriptionError && (
          <div className="error-description">This field is empty</div>
        )}
      </div>
      <button onClick={handleSubmit}>Create</button>
    </form>
  );
};
