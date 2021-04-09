import React, { useState } from 'react';

import {
  NewTaskContainer,
  NewTaskForm,
  NewTaskFormInput,
  NewTaskFormButton,
} from './styles';
import { task } from '../../@types';

interface NewTaskInputProps {
  column: string;
  onSubmit: (NewItem: task) => void;
}

const NewTaskInput = ({
  onSubmit,
  column,
}: NewTaskInputProps): React.ReactElement => {
  const [newItem, setNewItem] = useState<task>({
    content: '',
    column,
  });

  function setNewTask(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewItem({ content: e.target.value, column: '' });
  }

  function submit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <NewTaskContainer>
      <NewTaskForm onSubmit={submit}>
        <NewTaskFormInput
          placeholder="Digite uma nova tarefa"
          onChange={setNewTask}
        />
        <NewTaskFormButton type="submit">Adicionar</NewTaskFormButton>
      </NewTaskForm>
    </NewTaskContainer>
  );
};

export default NewTaskInput;
