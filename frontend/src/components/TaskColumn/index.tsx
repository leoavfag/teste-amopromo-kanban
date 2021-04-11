import React, { useState } from 'react';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';
import {
  ColumnContainer,
  ColumnTitle,
  ColumnTitleContainer,
  AddTaskButton,
} from './styles';
import NewTaskInput from '../NewTaskInput';
import { task, taskResponse } from '../../@types';
import Task from '../Task';

interface TaskColumnProps {
  column: string;
  data: taskResponse[];
  setData: (data: taskResponse[]) => void;
}

const TaskColumn = ({
  column,
  data,
  setData,
}: TaskColumnProps): React.ReactElement => {
  const [newTaskVisibility, setNewTaskVisibility] = useState<boolean>(false);

  async function addNewTask(newTask: task): Promise<void> {
    const itensCopy = Array.from(data);
    console.log(newTask);

    try {
      const newData = await axios.post<taskResponse>('/api/task/', newTask);
      itensCopy.push(newData.data);
      setData(itensCopy);
    } catch (err) {
      alert('Erro ao cadastrar a tarefa, tente novamente.');
    }
  }

  async function updateTaskContent(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
  ): Promise<void> {
    const itensCopy = Array.from(data);
    itensCopy.splice(index, 1, {
      title: itensCopy[index].title,
      id: itensCopy[index].id,
      content: e.target.value,
      column: itensCopy[index].column,
    });
    setData(itensCopy);

    const newTaskData = {
      title: itensCopy[index].title,
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
        title: response.data.title,
        content: response.data.content,
        column: response.data.column,
      });
      setData(itensCopy);
      alert('Erro ao alterar a tarefa, tente novamente.');
    }
  }

  async function updateTaskTitle(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ): Promise<void> {
    const itensCopy = Array.from(data);
    itensCopy.splice(index, 1, {
      title: e.target.value,
      id: itensCopy[index].id,
      content: itensCopy[index].column,
      column: itensCopy[index].column,
    });
    setData(itensCopy);

    const newTaskData = {
      title: e.target.value,
      content: itensCopy[index].content,
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
        title: response.data.title,
        content: response.data.content,
        column: response.data.column,
      });
      setData(itensCopy);
      alert('Erro ao alterar a tarefa, tente novamente.');
    }
  }

  async function deleteTask(index: number): Promise<void> {
    const itensCopy = Array.from(data);
    try {
      await axios.delete(`/api/task/${itensCopy[index].id}`);
      itensCopy.splice(index, 1);
      setData(itensCopy);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ColumnContainer>
      <ColumnTitleContainer>
        <ColumnTitle>{column}</ColumnTitle>
        <AddTaskButton onClick={() => setNewTaskVisibility(!newTaskVisibility)}>
          <FiPlus />
        </AddTaskButton>
      </ColumnTitleContainer>
      {newTaskVisibility && (
        <NewTaskInput onSubmit={addNewTask} column={column} />
      )}
      {data &&
        data.map((tsk, index) => {
          return tsk.column === column ? (
            <Task
              key={tsk.id}
              title={tsk.title}
              value={tsk.content}
              onContentChange={(
                event: React.ChangeEvent<HTMLTextAreaElement>,
              ) => updateTaskContent(event, index)}
              onTitleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                updateTaskTitle(event, index)
              }
              onDelete={() => deleteTask(index)}
            />
          ) : null;
        })}
    </ColumnContainer>
  );
};

export default TaskColumn;
