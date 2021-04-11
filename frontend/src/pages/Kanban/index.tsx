/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { taskResponse } from '../../@types';

import { KanbanContainer } from './styles';
import TaskColumn from '../../components/TaskColumn';

const Kanban = (): React.ReactElement => {
  const [tasks, setTasks] = useState<taskResponse[]>([]);

  const loadTasks = async (): Promise<void> => {
    try {
      const response = await axios.get<taskResponse[]>('/api/task');
      response.data.sort((a, b) => {
        return a.id > b.id ? 1 : b.id > a.id ? -1 : 0;
      });
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <KanbanContainer>
      <TaskColumn column="to do" data={tasks} setData={setTasks} />
      <TaskColumn column="doing" data={tasks} setData={setTasks} />
      <TaskColumn column="done" data={tasks} setData={setTasks} />
    </KanbanContainer>
  );
};

export default Kanban;
