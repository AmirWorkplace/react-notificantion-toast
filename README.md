<!-- # React + JavaScript + Vite

## Installation :

<code>
   npm i react-notificantion-toast <br/>
   yarn react-notificantion-toast <br/>
   pnpm install react-notificantion-toast <br/>
</code> -->

# React + JavaScript + Vite

- react-notificantion-toast

## React Notificantion Toast with Progressbar.

[![NPM Version](https://img.shields.io/npm/v/react-notificantion-toast.svg)](https://www.npmjs.com/package/react-notificantion-toast)
[![License](https://img.shields.io/npm/l/react-notificantion-toast.svg)](https://github.com/AmirWorkplace/react-notificantion-toast)

A brief description of my package and its key features.

## Installation

You can install this package via npm. Run the following command:

- Using Node Package Manager (NPM)

```shell
npm i react-notificantion-toast
```

- Using Yarn

```shell
yarn add react-notificantion-toast
```

- Using PNPM

```shell
pnpm install react-notificantion-toast
```

<br/>

## How to use in react.js

- First import useNotificantion hook from `react-notificantion-toast` your npm library
- Then initialize it and set a duration of this notificantion visibility for milliseconds, if you're not initialized it such as[`useNotificantionToast(50000)`], then it take it's default value which are `5000` like 5000ms or 5 seconds.
- Or you can use a `.env`'s local variable for initialized this notificantion toast duration's value.
- When you call `const [active, Toast] = useNotificantionToast()` this function you got two returning variable which one notificantion toast activator function and other one is notificantion toast component which receive tow attributes of parameter `type` & `text` this two are takes definitely a string value.
- The `type` is receive some specific type of string which are indicate this notificantion's type.
- And the `text` receive an string which are the main message's text!

- All the message types are available on that present version are ----

```
["success", ""danger, "warning", "primary", "download", "normal", "info", "dark"]
```

```.env
VITE_NOTIFICANTION_TOAST_DURATION = 5000 # 5s
```

```
import useNotificantionToast from 'react-notificantion-toast';
export default function App() {
  const [active, Toast] = useNotificantionToast();

  return (
    <div>
      <div>
        <button
          onClick={function () {
            active((prevState) => !prevState);
          }}
          className="click"
        >
          click
        </button>
      </div>
      <div>
        <Toast
          type="success"
          text="Hi! I am from notificantion toast"
        />
      </div>
    </div>
  );
}
```

### Pleasure:

- I hope you are enjoy to use this library.
- Please give an github star, If it's really helpful for you!
- Support me on [SYED AMIR ALI](https://www.syedamirali.com)
- Thanks in advance & stay safe and keep safe.
