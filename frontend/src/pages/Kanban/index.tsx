/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { taskResponse } from '../../@types';

import {
  KanbanContainer,
  KanbanHeader,
  KanbanColumns,
  ImageKanban,
} from './styles';
import TaskColumn from '../../components/TaskColumn';
import AddColumn from '../../components/AddColumn';
import amoPromo from '../../assets/imagens/AmoPromo.png';

const Kanban = (): React.ReactElement => {
  const [tasks, setTasks] = useState<taskResponse[]>([]);
  const [columns, setColumns] = useState<string[]>([
    'To do',
    'In progress',
    'Done',
  ]);

  async function loadTasks(): Promise<void> {
    try {
      const response = await axios.get<taskResponse[]>('/api/task');
      response.data.sort((a, b) => {
        return a.id > b.id ? 1 : b.id > a.id ? -1 : 0;
      });
      setTasks(response.data);
      const newColumns = new Set(['To do', 'In progress', 'Done']);
      response.data.map((tsk) => newColumns.add(tsk.column));
      setColumns(Array.from(newColumns));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <KanbanContainer>
        <KanbanHeader>
          <ImageKanban src={amoPromo} alt="Amo Promo" />
        </KanbanHeader>
        <KanbanColumns>
          {columns.map((columnName, index) => {
            return (
              <TaskColumn
                key={columnName}
                columnIndex={index}
                columns={columns}
                column={columnName}
                data={tasks}
                setData={setTasks}
              />
            );
          })}
          <AddColumn columns={columns} setColumns={setColumns} />
        </KanbanColumns>
      </KanbanContainer>
    </>
  );
};

export default Kanban;
