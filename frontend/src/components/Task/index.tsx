import React from 'react';
import { FiX } from 'react-icons/fi';

import {
  TaskContainer,
  TaskContent,
  DeleteTaskButton,
  TaskTitle,
  ContentRow,
} from './styles';

interface TaskProps {
  title: string;
  value: string;
  onContentChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => Promise<void>;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  onDelete: () => void;
}

const Task = ({
  title,
  value,
  onContentChange,
  onTitleChange,
  onDelete,
}: TaskProps): React.ReactElement => {
  return (
    <TaskContainer>
      <DeleteTaskButton onClick={onDelete}>
        <FiX />
      </DeleteTaskButton>
      <TaskTitle value={title} onChange={onTitleChange} />
      <ContentRow>
        <TaskContent value={value} onChange={onContentChange} maxLength={200} />
      </ContentRow>
    </TaskContainer>
  );
};

export default Task;
