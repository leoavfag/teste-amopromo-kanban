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
  const [value, setValue] = useState<string>('');

  function setNewTask(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNewItem({ content: e.target.value, column });
    setValue(e.target.value);
  }

  function submit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (value !== '') {
      onSubmit(newItem);
      setValue('');
    }
  }

  return (
    <NewTaskContainer>
      <NewTaskForm onSubmit={submit}>
        <NewTaskFormInput
          placeholder="Digite uma nova tarefa"
          value={value}
          onChange={setNewTask}
        />
        <NewTaskFormButton type="submit">Adicionar</NewTaskFormButton>
      </NewTaskForm>
    </NewTaskContainer>
  );
};

export default NewTaskInput;
