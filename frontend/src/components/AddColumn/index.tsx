import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import {
  AddColumnContainer,
  AddColumnFormButton,
  AddColumnInput,
} from './styles';

interface AddColumnProps {
  columns: string[];
  setColumns: (columns: string[]) => void;
}

const AddColumn = ({
  columns,
  setColumns,
}: AddColumnProps): React.ReactElement => {
  const [value, setValue] = useState<string>('');

  function handleButtonClick(): void {
    if (value !== '') {
      const newColumn = new Set(columns);
      newColumn.add(value);
      setColumns(Array.from(newColumn));
      setValue('');
    }
  }

  function handleInputText(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  return (
    <AddColumnContainer>
      <AddColumnInput value={value} onChange={handleInputText} maxLength={11} />
      <AddColumnFormButton onClick={handleButtonClick}>
        <FiPlus />
      </AddColumnFormButton>
    </AddColumnContainer>
  );
};

export default AddColumn;
