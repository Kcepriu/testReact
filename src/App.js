import { useRef, forwardRef } from "react";

import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  const btnRef = useRef();

  const handlerOnClick = () => {
    console.log("test", btnRef);
  };

  const CustomButton = forwardRef((props, ref) => {
    return (
      <MyButton ref={ref} {...props}>
        {props.children}
      </MyButton>
    );
  });

  return (
    <div className="App">
      <CustomButton ref={btnRef} handlerOnClick={handlerOnClick} />
    </div>
  );
}

export default App;
