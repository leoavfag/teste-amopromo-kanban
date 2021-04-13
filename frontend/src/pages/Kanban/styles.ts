import styled from 'styled-components';

export const KanbanContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KanbanColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;

  width: 100%;
  height: 90vh;
  margin: 0 auto;

  overflow-x: scroll;
  overflow-y: hidden;
`;

export const KanbanHeader = styled.header`
  display: flex;
  justify-content: center;
  background: #2f659d;
`;

export const ImageKanban = styled.img`
  width: 50px;
`;
