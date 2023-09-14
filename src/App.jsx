import './index.css';
import useNotificantionToast from './useNotificantionToast';
export default function App() {
  const [isActive, NotificantionContainer] = useNotificantionToast();

  return (
    <div>
      <div>
        <button
          onClick={function () {
            isActive((p) => !p);
          }}
          className="click"
        >
          click
        </button>
      </div>
      <div>
        <NotificantionContainer
          type="success"
          text="Hi! I am from notificantion toast"
        />
      </div>
    </div>
  );
}
