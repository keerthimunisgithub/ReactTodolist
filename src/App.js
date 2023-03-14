import React from 'react';
import Todolist from './components/Todolist';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core' ;
import { faTrash,faPlus,faEdit} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash,faPlus,faEdit);
function App() {
  return (
    <div className="App">
    <Todolist></Todolist> 
    </div>
  );
}

export default App;
