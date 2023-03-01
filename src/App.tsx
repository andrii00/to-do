import './App.css';
import { Form } from './components/Form/Form';
import { Modal } from './components/Modal/Modal';
import { ToDoList } from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <Form />
      <ToDoList />
      <Modal />
    </div>
  );
}

export default App;
