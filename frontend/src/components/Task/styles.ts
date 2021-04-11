import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  border-radius: 4px;
  background: white;
  width: 100%;
  --webkit-box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
`;

export const TaskContent = styled(TextareaAutosize)`
  border: none;
  outline: none;
  font-size: 18px;
  resize: none;
  overflow-y: hidden;
  font-size: 14px;
  width: 80%;
  margin-right: 5px;
`;

export const TaskTitle = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  text-align: center;
`;

export const DeleteTaskButton = styled.button`
  background: transparent;
  border: none;
  width: 10%;
  font-size: 14px;
  align-self: flex-end;
`;

export const ContentRow = styled.div`
  border-top: 1px solid black;
  margin-top: 5px;
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  background: white;
  width: 100%;
`;
