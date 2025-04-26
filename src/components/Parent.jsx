import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {

  const colors = ['red', 'green', 'orange', 'purple', 'blue'];
  const [textColor, setTextColor] = useState('black');
  const [colorIndex, setColorIndex] = useState(0);

  const changeTextColor = () => {
    const nextColorIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextColorIndex);
    setTextColor(colors[nextColorIndex]);
  }

  return (
    <div>
      <h1>Hello from Parent</h1>
      <Child1 changeColor={changeTextColor} />
      <Child2 color={textColor} />
    </div>
  )
}

export default Parent;