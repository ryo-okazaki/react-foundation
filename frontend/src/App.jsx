import React, {useState} from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0); // useStateの中は初期値
  // stateとして使用する変数名、2つ目はそのstateを変更するための関数名

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color="pink">
        元気です
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  )
}

export default App;