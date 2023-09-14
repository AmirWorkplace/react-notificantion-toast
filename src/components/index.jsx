import React, { useEffect, useState } from 'react';
import assets from '../assets';
import styles from '../assets/style.module.css';

const useNotificantionToast = (duration) => {
  let timeout = null;
  const [isToastActive, setIsToastActive] = useState(false);

  const progressDuration =
    Number(duration) ||
    Number(import.meta.env.VITE_NOTIFICANTION_TOAST_DURATION) ||
    5000;

  useEffect(() => {
    timeout = setTimeout(function () {
      setIsToastActive(false);
    }, progressDuration);

    return () => clearTimeout(timeout);
  }, [isToastActive, progressDuration]);

  function closeToastHandler() {
    setIsToastActive(false);
    clearTimeout(timeout);
  }

  const rootColor = {
    success: {
      '--toast-color': 'rgb(0, 169, 112)',
      '--close-color': 'rgb(255, 0, 0)',
    },

    danger: {
      '--toast-color': 'rgb(255, 0, 0)',
      '--close-color': 'rgb(0, 169, 112)',
    },

    warning: {
      '--toast-color': 'rgb(255, 132, 0)',
      '--close-color': 'rgb(255, 0, 0)',
    },

    primary: {
      '--toast-color': 'rgb(13, 110, 253)',
      '--close-color': 'rgb(255, 0, 0)',
    },

    download: {
      '--toast-color': 'rgb(102, 16, 242)',
      '--close-color': 'rgb(255, 0, 0)',
    },

    normal: {
      '--toast-color': 'rgb(119, 119, 119)',
      '--close-color': 'rgb(255, 0, 0)',
    },

    info: {
      '--toast-color': 'rgb(13, 202, 240)',
      '--close-color': 'rgb(255, 0, 0)',
    },

    dark: {
      '--toast-color': 'rgb(0, 0, 0)',
      '--close-color': 'rgb(255, 0, 0)',
    },
  };

  const NotificantionContainer = ({ type, text }) =>
    isToastActive && (
      <div>
        <div className={styles.container} style={rootColor[type]}>
          <div className={styles.box}>
            <div className={styles.leftBorder}></div>
            <div
              className={styles.leftIcon}
              style={{
                '--animation-duration': progressDuration + 'ms',
              }}
            >
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
              style={{
                '--animation-duration': progressDuration + 'ms',
              }}
            ></div>
          </div>
        </div>
      </div>
    );

  return [setIsToastActive, NotificantionContainer];
};

export default useNotificantionToast;
