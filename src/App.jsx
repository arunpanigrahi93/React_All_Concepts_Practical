import "./App.css";
import UseStateHook from "./components/hooks/UseStateHook";
import UseEffectHook from "./components/hooks/UseEffectHook";
import Parent from "./components/hooks/MemoCallbackUseMemo/Parent";
import Portal from "./components/hooks/Portal.jsx";

function App() {
  return (
    <div>
      {/* <UseStateHook />
      <UseEffectHook /> */}
      {/* <Parent /> */}
      <Portal />
    </div>
  );
}

export default App;
