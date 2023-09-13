import { CSSProperties, FC, useEffect, useState } from 'react';
import assets from './assets';
import styles from './assets/style.module.css';

type NotificantionToastProps = {
  type: string;
  isActive: boolean;
  text: string;
  duration: number;
};

const NotificantionToasts: FC<NotificantionToastProps> = ({
  type,
  isActive,
  text,
  duration,
}) => {
  let timeout: null | any = null;
  const [isToastActive, setIsToastActive] = useState(isActive);

  const progressDuration =
    Number(duration) ||
    Number(process.env.VITE_NOTIFICANTION_TOAST_DURATION) ||
    Number(import.meta.env.VITE_NOTIFICANTION_TOAST_DURATION) ||
    5000;

  useEffect(() => {
    setIsToastActive(true);
    // closeToastHandler();
    timeout = setTimeout(function () {
      setIsToastActive(false);
    }, progressDuration);

    return () => clearTimeout(timeout);
  }, [isActive, progressDuration]);

  function closeToastHandler() {
    setIsToastActive(false);
    return () => clearTimeout(timeout);
  }

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
    isToastActive && (
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
            <div className={styles.notificantionBox}>{text}</div>
            <div className={styles.rightIcon}>
              <p className={styles.picture} onClick={closeToastHandler}>
                {assets.svg['close']({ width: 20, height: 20 })}
              </p>
            </div>
          </div>

          <div className={styles.progressBox}>
            <div
              className={styles.progressBar}
              style={
                {
                  '--animation-duration': progressDuration + 'ms',
                } as CSSProperties
              }
            ></div>
          </div>
        </div>
      </section>
    )
  );
};

export default NotificantionToasts;
