import logo from './logo.svg';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import ParentComponent2 from './components/ParentComponent2';
import { CountProvider } from './components/CountContext';
import ParentComponent3 from './components/ParentComponent3';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Week 5 Task1 Counter</h1>
   
      <Counter/>
        <h1>Week 5 Task2 Parent-Child </h1>
      <ParentComponent/>
        <h1>Week 5 Task3 </h1>
         <ParentComponent2/>
     
        <h1>Week 5 Task4 </h1>

      <CountProvider>
        <ParentComponent3/>
      </CountProvider>
    </div>
  );
}

export default App;
