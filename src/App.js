import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import ShowBox from './components/ShowBox';

function App() {
  const [colors, setColors] = useState([]);
  return (
    <div className="App">
      <Input color={colors} setColor={setColors} />
      <ShowBox colorArr={colors} />
    </div>
  );
}

export default App;
