import { CORE_CONCEPTS } from "./data";
import { CoreCard } from "./components/CoreCard";
import { HeaderHome } from "./components/HeaderHome/HeaderHome";
import TabButton from "./components/TabButton/TabButton";

function App() {
  return (
    <div>
      <HeaderHome />
      <CoreCard {...CORE_CONCEPTS[0]} />
      <TabButton word="mu ha ha ha ha."> Button_01 </TabButton>
    </div>
  );
}

export default App;
