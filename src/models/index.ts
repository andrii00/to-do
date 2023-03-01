export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface TodosState {
  list: Todo[];
  modalActive: boolean;
  modalTodo: Todo;
}
export interface CreateToDo {
  title: string;
  description: string;
}
