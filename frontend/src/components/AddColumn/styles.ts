import styled from 'styled-components';

export const AddColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  background: white;
  min-width: 272px;
  --webkit-box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 14px 1px rgba(0, 0, 0, 0.34);
`;

export const AddColumnInput = styled.input`
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  width: 100%;
`;

export const AddColumnFormButton = styled.button`
  font-size: 22px;
  background: transparent;
  border: none;
  width: 10%;
  align-self: center;
`;
