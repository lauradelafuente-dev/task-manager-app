import React, { useContext, useEffect } from 'react'; 
import { Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import { ThemeContext } from '../context/ThemeContext'; 

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 15px;
  min-height: 106px;
  border-radius: 8px;
  max-width: 311px;
  background: ${({ isDragging, theme }) =>
    isDragging
      ? theme === 'light'
        ? 'rgba(255, 59, 59, 0.15)'
        : 'rgba(59, 59, 59, 0.15)'
      : theme === 'light'
      ? '#ffffff'
      : '#2b2b2b'};
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
  margin-top: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s ease, color 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => (theme === 'light' ? '#7d7d7d' : '#ccc')};
    transition: color 0.5s ease;
  }
`;

const TaskCard = ({ item, index }) => {
  const { theme } = useContext(ThemeContext); 

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background-light',
      theme === 'light' ? '#fff' : '#333'
    );
    document.documentElement.style.setProperty(
      '--text-light',
      theme === 'light' ? '#000' : '#fff'
    );
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
