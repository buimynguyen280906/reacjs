import { useState } from 'react';

function Example1() {

  const [count, setCount] = useState(1)

  const tang = () => {
    setCount(count + 1)
  }

  const giam = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={tang}>tang</button>
      <button onClick={giam}>giam</button>
    </div>
  );
}

export default Example1;
