import { useState } from 'react';
import useNotificantionToast from './components';

function App() {
  const [count, setCount] = useState(0);
  const [active, Toast] = useNotificantionToast(100000);

  return (
    <div>
      <Toast
        type="success"
        text="Number(process && process.env.NOTIFICANTION_TOAST_DURATION)"
      />

      <button onClick={() => active((prevState) => !prevState)}>
        sjkfgsdf
      </button>
    </div>
  );
}

export default App;
