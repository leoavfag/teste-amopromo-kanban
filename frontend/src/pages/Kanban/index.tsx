import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { taskResponse } from '../../@types';

const Kanban = (): React.ReactElement => {
  const [tasks, setTasks] = useState<taskResponse[]>();

  const loadTasks = async (): Promise<void> => {
    try {
      const response = await axios.get<taskResponse[]>('/api/task');
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <div>
      <h1>Tem que fazer</h1>
      <ol>
        {tasks &&
          tasks.map((tsk) => {
            return tsk.column === 'to do' ? (
              <ul key={tsk.id}>{tsk.content}</ul>
            ) : null;
          })}
      </ol>
      <h1>Fazendo</h1>
      <ol>
        {tasks &&
          tasks.map((tsk) => {
            return tsk.column === 'doing' ? (
              <ul key={tsk.id}>{tsk.content}</ul>
            ) : null;
          })}
      </ol>
      <h1>Feito</h1>
      <ol>
        {tasks &&
          tasks.map((tsk) => {
            return tsk.column === 'done' ? (
              <ul key={tsk.id}>{tsk.content}</ul>
            ) : null;
          })}
      </ol>
    </div>
  );
};

export default Kanban;
