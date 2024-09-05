import { CORE_CONCEPTS } from "./data";
import { CoreCard } from "./components/CoreCard";
import { HeaderHome } from "./components/HeaderHome/HeaderHome";
import TabButton from "./components/TabButton/TabButton";

function App() {

      // this event is create when you click this component.
      const clickTabButton = () => {
        console.log("nah i'd win.");
    }

  return (
    <div>
      <HeaderHome />
      <CoreCard {...CORE_CONCEPTS[0]} />
      <TabButton onClickThisBut={clickTabButton} word="Mu ha ha ha ha."> frog </TabButton>
      <TabButton onClickThisBut={clickTabButton} word="Age it's not reason, can I fight."> rhung'noi </TabButton>
    </div>
  );
}

export default App;
