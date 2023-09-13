// import { ReactNode } from 'react';
// import NotificantionToast from './NotificantionToast';

import NotificantionToasts from './NotificantionToast';

export default function Test() {
  const [] = NotificantionToast();
  // type toast = {
  //   text: string;
  //   type: string;
  // };

  // interface NotificationData {
  //   text: string;
  //   type: string;
  //   isActive: boolean;
  //   duration: number;
  // }

  // const [setIsToastActive, NotificantionContainer] = NotificantionToast({
  //   type: 'text',
  //   text: 'Hello',
  //   duration: 5000,
  // }) as NotificationData;

  return (
    <div>
      {/* {
        {
          /* <NotificantionContainer
        text={"Hi! What's a typescript problem"}
        type={'success'}
      /> * /
        }
      } */}

      {/* {NotificantionContainer({})} */}
      <button
        onClick={
          () => {} //</div>isActive((p) => !p)
        }
      >
        Hi
      </button>
    </div>
  );
}
