/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { taskResponse } from '../../@types';

import { KanbanContainer } from './styles';
import TaskColumn from '../../components/TaskColumn';
import AddColumn from '../../components/AddColumn';

const Kanban = (): React.ReactElement => {
  const [tasks, setTasks] = useState<taskResponse[]>([]);
  const [columns, setColumns] = useState<string[]>(['to do', 'doing', 'done']);

  async function loadTasks(): Promise<void> {
    try {
      const response = await axios.get<taskResponse[]>('/api/task');
      response.data.sort((a, b) => {
        return a.id > b.id ? 1 : b.id > a.id ? -1 : 0;
      });
      setTasks(response.data);
      const newColumns = new Set(['to do', 'doing', 'done']);
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
    <KanbanContainer>
      {columns.map((columnName) => {
        return (
          <TaskColumn
            key={columnName}
            column={columnName}
            data={tasks}
            setData={setTasks}
          />
        );
      })}
      <AddColumn columns={columns} setColumns={setColumns} />
    </KanbanContainer>
  );
};

export default Kanban;
