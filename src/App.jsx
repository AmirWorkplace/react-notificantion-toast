import { useState } from 'react';
import reactLogo from './assets/react.svg';
import useNotificantionToast from 'react-notificantion-toast';

function App() {
  const [count, setCount] = useState(0);
  const [active, Toast] = useNotificantionToast(100000);

  return (
    <>
      <Toast type="success" text="How are you!" />

      <button onClick={() => active((prevState) => !prevState)}>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </button>
    </>
  );
}

export default App;
