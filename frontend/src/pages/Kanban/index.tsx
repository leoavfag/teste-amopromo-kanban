/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { taskResponse, task } from '../../@types';

import { KanbanContainer } from './styles';
import TaskColumn from '../../components/TaskColumn';
import Task from '../../components/Task';

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

  async function addNewTask(newTask: task): Promise<void> {
    const itensCopy = Array.from(tasks);
    console.log(newTask);

    try {
      const newData = await axios.post<taskResponse>('/api/task/', newTask);
      itensCopy.push(newData.data);
      setTasks(itensCopy);
    } catch (err) {
      alert('Erro ao cadastrar a tarefa, tente novamente.');
    }
  }

  async function updateTask(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
  ): Promise<void> {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, {
      id: itensCopy[index].id,
      content: e.target.value,
      column: itensCopy[index].column,
    });
    setTasks(itensCopy);
    const newTaskData = {
      content: e.target.value,
      column: itensCopy[index].column,
    };
    try {
      await axios.put(`/api/task/${itensCopy[index].id}/`, newTaskData);
    } catch (error) {
      const response = await axios.get<taskResponse>(
        `/api/task/${itensCopy[index].id}`,
      );
      itensCopy.splice(index, 1, {
        id: response.data.id,
        content: response.data.content,
        column: response.data.column,
      });
      setTasks(itensCopy);
      alert('Erro ao alterar a tarefa, tente novamente.');
    }
  }

  async function deleteTask(index: number): Promise<void> {
    const itensCopy = Array.from(tasks);
    try {
      await axios.delete(`/api/task/${itensCopy[index].id}`);
      itensCopy.splice(index, 1);
      setTasks(itensCopy);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <KanbanContainer>
      <TaskColumn column="to do" onSubmit={addNewTask}>
        {tasks &&
          tasks.map((tsk, index) => {
            return tsk.column === 'to do' ? (
              <Task
                key={tsk.id}
                value={tsk.content}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateTask(event, index)
                }
                onDelete={() => deleteTask(index)}
              />
            ) : null;
          })}
      </TaskColumn>
      <TaskColumn column="doing" onSubmit={addNewTask}>
        {tasks &&
          tasks.map((tsk, index) => {
            return tsk.column === 'doing' ? (
              <Task
                key={tsk.id}
                value={tsk.content}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateTask(event, index)
                }
                onDelete={() => deleteTask(index)}
              />
            ) : null;
          })}
      </TaskColumn>
      <TaskColumn column="done" onSubmit={addNewTask}>
        {tasks &&
          tasks.map((tsk, index) => {
            return tsk.column === 'done' ? (
              <Task
                key={tsk.id}
                value={tsk.content}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateTask(event, index)
                }
                onDelete={() => deleteTask(index)}
              />
            ) : null;
          })}
      </TaskColumn>
    </KanbanContainer>
  );
};

export default Kanban;
