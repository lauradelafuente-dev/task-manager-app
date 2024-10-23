import React, { useContext, useEffect } from 'react'; // Importa useEffect
import { Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import { ThemeContext } from '../context/ThemeContext';  // Importa el contexto

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  background: ${({ isDragging, theme }) =>
    isDragging ? (theme === 'light' ? 'rgba(255, 59, 59, 0.15)' : 'rgba(59, 59, 59, 0.15)') : theme === 'light' ? 'white' : '#333'};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => (theme === 'light' ? '#7d7d7d' : '#ccc')};
  }
`;

const TaskCard = ({ item, index }) => {
  const { theme } = useContext(ThemeContext);  // Usa el contexto del tema

  useEffect(() => {
    document.documentElement.style.setProperty('--background-light', theme === 'light' ? '#fff' : '#333');
    document.documentElement.style.setProperty('--text-light', theme === 'light' ? '#000' : '#fff');
  }, [theme]);

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation isDragging={snapshot.isDragging} theme={theme}>
            <p>{item.Task}</p>
            <div className="secondary-details">
              <p>
                <span>
                  {new Date(item.Due_Date).toLocaleDateString('en-us', {
                    month: 'short',
                    day: '2-digit',
                  })}
                </span>
              </p>
            </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
