import "./App.css";
import UseStateHook from "./components/hooks/UseStateHook";
import UseEffectHook from "./components/hooks/UseEffectHook";
import Parent from "./components/hooks/MemoCallbackUseMemo/Parent";

function App() {
  return (
    <div>
      {/* <UseStateHook />
      <UseEffectHook /> */}
      <Parent />
    </div>
  );
}

export default App;
