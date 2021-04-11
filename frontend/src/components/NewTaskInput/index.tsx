import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import {
  NewTaskContainer,
  NewTaskForm,
  NewTaskFormInput,
  NewTaskFormButton,
  NewTaskTitle,
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
  const [txtAreaValue, settxtAreaValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  function handleTextArea(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    settxtAreaValue(e.target.value);
  }

  function handleInputText(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
  }

  function submit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (txtAreaValue !== '' && inputValue) {
      const newItem = { title: inputValue, content: txtAreaValue, column };
      onSubmit(newItem);
      settxtAreaValue('');
      setInputValue('');
    }
  }

  return (
    <NewTaskContainer>
      <NewTaskForm onSubmit={submit}>
        <NewTaskTitle
          placeholder="Digite o titulo"
          value={inputValue}
          onChange={handleInputText}
        />
        <NewTaskFormInput
          placeholder="Digite uma nova tarefa"
          value={txtAreaValue}
          onChange={handleTextArea}
          maxLength={200}
        />
        <NewTaskFormButton type="submit">
          <FiCheck />
        </NewTaskFormButton>
      </NewTaskForm>
    </NewTaskContainer>
  );
};

export default NewTaskInput;
