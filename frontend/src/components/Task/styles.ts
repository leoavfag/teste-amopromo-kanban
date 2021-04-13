import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 0 0 10px 0;
  border-radius: 4px;
  background: white;
  min-height: 150px;
  width: 100%;
  --webkit-box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
`;

export const TaskContent = styled(TextareaAutosize)`
  border: none;
  outline: none;
  padding: 0px 10px;
  resize: none;
  overflow-y: hidden;
  font-size: 1em;
  width: 100%;
`;

export const TaskTitle = styled.input`
  margin: 5px 0;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  min-height: 16px;
  text-align: center;
`;

export const DeleteTaskButton = styled.button`
  background: transparent;
  border: none;
  width: 10%;
  font-size: 20px;
  align-self: flex-end;
`;

export const ContentRow = styled.div`
  border-top: 1px solid black;
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  background: white;
  width: 100%;
`;

export const ChangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChangeButton = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  font-size: 20px;
`;

export const TaskButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: blue;
  border-radius: 4px;
  min-height: 30px;
  margin-bottom: 5px;
`;
