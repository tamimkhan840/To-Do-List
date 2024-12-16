import { useState } from "react";

function Button() {

    let [num, setNum] = useState(0);
  let clickHandler = () => {

    setNum (num + 10);
    
  }


  return (
    <div className="max-w-screen-md mx-auto ">
        <button onClick={clickHandler} className="btn btn-primary">{num}</button>
    </div>
  )
}

export default Button
