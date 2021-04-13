import React from 'react';
import { FiX, FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

import {
  TaskContainer,
  TaskContent,
  DeleteTaskButton,
  TaskTitle,
  ContentRow,
  ChangeContainer,
  ChangeButton,
  TaskButtons,
} from './styles';

interface TaskProps {
  title: string;
  value: string;
  columnIndex: number;
  columns: string[];
  updateTaskColumn: (columnName: string) => Promise<void>;
  onContentChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => Promise<void>;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  onDelete: () => void;
}

const Task = ({
  title,
  value,
  columnIndex,
  columns,
  updateTaskColumn,
  onContentChange,
  onTitleChange,
  onDelete,
}: TaskProps): React.ReactElement => {
  function handleChangeColumn(columnIndexChange: number): void {
    if (columnIndexChange < columns.length) {
      updateTaskColumn(columns[columnIndexChange]);
    }
  }
  return (
    <TaskContainer>
      <TaskButtons>
        <ChangeContainer>
          {columnIndex !== 0 ? (
            <ChangeButton onClick={() => handleChangeColumn(columnIndex - 1)}>
              <FiChevronsLeft />
            </ChangeButton>
          ) : null}
          {columnIndex !== columns.length - 1 ? (
            <ChangeButton onClick={() => handleChangeColumn(columnIndex + 1)}>
              <FiChevronsRight />
            </ChangeButton>
          ) : null}
        </ChangeContainer>
        <DeleteTaskButton onClick={onDelete}>
          <FiX />
        </DeleteTaskButton>
      </TaskButtons>
      <TaskTitle value={title} onChange={onTitleChange} />
      <ContentRow>
        <TaskContent value={value} onChange={onContentChange} maxLength={200} />
      </ContentRow>
    </TaskContainer>
  );
};

export default Task;
