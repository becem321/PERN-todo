import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  return (
    <Fragment>
      <div className="container">
      <Header />
      <Input />
      <TodoList />
      </div>
    </Fragment>  
  );
}

export default App;
