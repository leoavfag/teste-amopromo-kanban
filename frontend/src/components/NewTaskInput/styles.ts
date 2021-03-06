import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const NewTaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 0 0 10px 0;
  border-radius: 4px;
  background: white;
  width: 100%;
  --webkit-box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
  min-height: 150px;
`;

export const NewTaskForm = styled.form``;

export const NewTaskFormInput = styled(TextareaAutosize)`
  border: none;
  outline: none;
  font-size: 18px;
  resize: none;
  overflow-y: hidden;
  font-size: 14px;
  width: 85%;
  margin-right: 5px;
  padding: 5px 10px 0 10px;
`;

export const NewTaskTitle = styled.input`
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 5px 0;
  padding-bottom: 5px;
  font-size: 16px;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const NewTaskFormButton = styled.button`
  font-size: 14px;
  background: transparent;
  border: none;
  width: 10%;
  align-self: flex-end;
`;
