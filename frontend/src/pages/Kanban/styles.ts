import styled from 'styled-components';

export const KanbanContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100vh;
  margin: 0 auto;

  overflow-x: scroll;
  overflow-y: hidden;
`;
