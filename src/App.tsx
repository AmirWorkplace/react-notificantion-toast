import { useState } from 'react';
import NotificantionToasts from './NotificantionToasts';
import './index.css';
import Test from './Toast';
export default function App() {
  const [isActiveToast, setIsActiveToast] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={function () {
            setIsActiveToast(!isActiveToast);
          }}
          className="click"
        >
          click
        </button>
      </div>
      <div>
        <NotificantionToasts
          type="success"
          isActive={isActiveToast}
          text="Hi! I am from notificantion toast"
          duration={5000}
        />
        <Test />
      </div>
    </div>
  );
}

/* import { CSSProperties } from 'react';
import assets from './assets';
import styles from './assets/style.module.css';

// interface {
//   children
// }

const App = ({}) => {
  // type root = {
  //   // rootColor: Object
  //   '--success-toast': CSSProperties;
  //   success: Object;
  // };

  const type: string = 'dark';

  const rootColor = {
    success: {
      '--toast-color': 'rgb(0, 169, 112)',
      '--close-color': 'rgb(255, 0, 0)',
    } as CSSProperties,

    danger: {
      '--toast-color': 'rgb(255, 0, 0)',
      '--close-color': 'rgb(0, 169, 112)',
    } as CSSProperties,

    warning: {
      '--toast-color': 'rgb(255, 132, 0)',
      '--close-color': 'rgb(255, 0, 0)',
    } as CSSProperties,

    primary: {
      '--toast-color': 'rgb(13, 110, 253)',
      '--close-color': 'rgb(255, 0, 0)',
    } as CSSProperties,

    download: {
      '--toast-color': 'rgb(102, 16, 242)',
      '--close-color': 'rgb(255, 0, 0)',
    } as CSSProperties,

    normal: {
      '--toast-color': 'rgb(119, 119, 119)',
      '--close-color': 'rgb(255, 0, 0)',
    } as CSSProperties,

    info: {
      '--toast-color': 'rgb(13, 202, 240)',
      '--close-color': 'rgb(255, 0, 0)',
    } as CSSProperties,

    dark: {
      '--toast-color': 'rgb(0, 0, 0)',
      '--close-color': 'rgb(255, 0, 0)',
    } as CSSProperties,
  } as any;

  return (
    <section>
      <div className={styles.container} style={rootColor[type]}>
        <div className={styles.box}>
          <div className={styles.leftBorder}></div>
          <div className={styles.leftIcon}>
            <p className={styles.picture}>
              {assets.svg[type]({ width: 26, height: 26 })}
            </p>
          </div>
          <p className={styles.messageType}>{type}</p>
          <div className={styles.notificantionBox}>
            Your Data updated successfully
          </div>
          <div className={styles.rightIcon}>
            <p className={styles.picture}>
              {assets.svg['close']({ width: 20, height: 20 })}
            </p>
          </div>
        </div>

        <div className={styles.progressBox}>
          <div
            className={styles.progressBar}
            style={{ '--animation-duration': '5s' } as CSSProperties}
          ></div>
        </div>
      </div>
      <div className="hidden bg-slate-300"></div>
    </section>
  );
};

export default App;
 */
