import React from 'react';

import { TaskContainer, TaskInput, DeleteTaskButton } from './styles';

interface TaskProps {
  value: string;
  onChange: () => void;
  onDelete: () => void;
}

const Task = ({ value, onChange, onDelete }: TaskProps): React.ReactElement => {
  return (
    <TaskContainer>
      <TaskInput value={value} onChange={onChange} />
      <DeleteTaskButton onClick={onDelete}>Excluir</DeleteTaskButton>
    </TaskContainer>
  );
};

export default Task;
