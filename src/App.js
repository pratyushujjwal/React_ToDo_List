// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const TaskCount = styled.span`
  margin: 10px;
`;
const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 70px;
  border-radius: 2px;
  cursor: pointer;
`;
const Text = styled.input`
  border: 2px solid #000;
  width: 280px;
  padding: 5px;
  border-radius: 2px;
  margin: 5px;
`;
const Tasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LIST = styled.li`
    listStyle:"none";
    text-decoration: "line-through";
`;
const App = () => {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
const handleClick = () => {
  let id;
    if(input == "")
    {
       id = todoList.length;
    }
    else {
       id = todoList.length + 1;
       setTodoList((pros) => [
        ...pros,
        {
          id: id,
          task: input,
          complete: false,
        }
      ]);
      setInput("");
    }
    // const id = todoList.length + 1;
    // setTodoList((pros) => [
    //   ...pros,
    //   {
    //     id: id,
    //     task: input,
    //     complete: false,
    //   }
    // ]);
    // setInput("");
  };
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete){
            //Task is pending, modifying it to complete and increment the count
            setCompletedTaskCount(completedTaskCount + 1);
        } 
        else {
            //Task is complete, modifying it back to pending, decrement Complete count
            setCompletedTaskCount(completedTaskCount - 1);
        }
item = { ...task, complete: !task.complete };
      } else item = { ...task };
return item;
    });
    setTodoList(list);
  };
return (
    <Container className='container'>
      <div>
          <h1 className='main'>ToDo List</h1>
          <Text value={input} onInput={(e) =>setInput(e.target.value)} className='main' />
          <Button onClick={() => handleClick()} className='main'>Add</Button>
        <Tasks className='main'>
          <TaskCount>
            <b>Pending Tasks :</b> {todoList.length - completedTaskCount}
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks :</b> {completedTaskCount}
          </TaskCount>
        </Tasks>
        <div>
          <ul className='list'>
            {todoList.map((todo) => {
              return (
                <LIST
                  complete = {todo.complete}
                  id={todo.id}
                  onClick={() => handleComplete(todo.id)}
                  style={{
                    listStyle: "none",
                    textDecoration: todo.complete && "line-through",
                  }}
                >
                  {todo.task}
                </LIST>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default App;
