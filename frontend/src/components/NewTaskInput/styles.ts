import styled from 'styled-components';

export const NewTaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 10px;
  border-radius: 4px;
  background: white;
  width: 100%;
  --webkit-box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
`;

export const NewTaskForm = styled.form``;

export const NewTaskFormInput = styled.textarea`
  border: none;
  outline: none;
  font-size: 18px;
  resize: none;
  overflow-y: hidden;
  font-size: 14px;
  width: 100%;
`;

export const NewTaskFormButton = styled.button`
  font-size: 14px;
`;
