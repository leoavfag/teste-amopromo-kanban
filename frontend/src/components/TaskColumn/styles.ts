import styled from 'styled-components';

interface TaskColumnProps {
  column: string;
}

export const ColumnContainer = styled.div<TaskColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  min-width: 272px;
  max-width: 272px;
  ${({ column }) => {
    if (column === 'To do') {
      return `background: #FA8072;`;
    }
    if (column === 'In progress') {
      return `background: #00BFFF;`;
    }
    if (column === 'Done') {
      return `background: #7CFC00;`;
    }
    return `background: #f0f0f5;`;
  }}
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 80%;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export const ColumnTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const AddTaskButton = styled.button`
  background: transparent;
  border: none;
  width: 10%;
  font-size: 24px;
  align-self: flex-end;
`;

export const ColumnTitle = styled.h1`
  margin: 0;
  font-size: 1.5em;
  font-weight: 600;
`;
