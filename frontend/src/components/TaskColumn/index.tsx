import React from 'react';

import { ColumnContainer, ColumnTitle } from './styles';
import NewTaskInput from '../NewTaskInput';
import { task } from '../../@types';

interface TaskColumnProps {
  column: string;
  children: React.ReactNode;
  onSubmit: (NewItem: task) => void;
}

const TaskColumn = ({
  children,
  column,
  onSubmit,
}: TaskColumnProps): React.ReactElement => {
  return (
    <ColumnContainer>
      <ColumnTitle>{column}</ColumnTitle>
      <NewTaskInput onSubmit={onSubmit} column={column} />
      {children}
    </ColumnContainer>
  );
};

export default TaskColumn;
