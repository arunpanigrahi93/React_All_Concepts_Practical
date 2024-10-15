import "./App.css";
import UseStateHook from "./components/hooks/UseStateHook";
import UseEffectHook from "./components/hooks/UseEffectHook";
import Parent from "./components/hooks/MemoCallbackUseMemo/Parent";
import Portal from "./components/hooks/Portal.jsx";
import Accordion from "./components/accordian/index.jsx";
import RandomColor from "./components/Random-color/index.jsx";

function App() {
  return (
    <div>
      {/* <UseStateHook />
      <UseEffectHook /> */}
      {/* <Parent /> */}
      {/* <Portal /> */}
      {/* <Accordion /> */}
      <RandomColor />
    </div>
  );
}

export default App;
