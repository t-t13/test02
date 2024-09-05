import { Fragment, useState } from "react";
import { EXAMPLES, CORE_CONCEPTS } from "./data";
import { CoreCard } from "./components/CoreCard";
import { HeaderHome } from "./components/HeaderHome/HeaderHome";
import TabButton from "./components/TabButton/TabButton";

function App() {

  // state that can management by hook is useState();
  const [num, setNum] = useState(0);
  const [agent, setAgent] = useState();

  const clickNumButton = (number) => {
    setNum(number);
  }

  // this event is create when you click this component.
  const clickTabButton = (message) => {
    setAgent(message);
  }

  // for check a re render of this component that has a state is changed.
  console.log("CREATE or RE-RENDER App comp.");

  return (
    <Fragment>
      <HeaderHome />
      <main>
        {CORE_CONCEPTS.map((concept, index)=> <CoreCard key={index} {...concept}/>)}

        {/* <CoreCard {...CORE_CONCEPTS[num]} />
        <button onClick={() => clickNumButton(0)}> 1 </button>
        <button onClick={() => clickNumButton(1)}> 2 </button>
        <button onClick={() => clickNumButton(2)}> 3 </button>
        <button onClick={() => clickNumButton(3)}> 4 </button> */}

        <section id="examples">

          <menu id="">
            {/* <TabButton onClickThisBut={() => clickTabButton("nah I'd win.")}> gojo </TabButton>
        <TabButton onClickThisBut={() => clickTabButton("Mu ha ha ha ha.")}> frog </TabButton>
        <TabButton onClickThisBut={() => clickTabButton("Age it's not reason, can I fight.")}> rhung'noi </TabButton>
        <TabButton onClickThisBut={() => clickTabButton("Age it's not reason, can I fight."
        )}> rhung'noi </TabButton> */}

            <TabButton isSelected={agent === "gojo"} onClickThisBut={() => clickTabButton("gojo")}> gojo </TabButton>
            <TabButton isSelected={agent === "frog"} onClickThisBut={() => clickTabButton("frog")}> frog </TabButton>
            <TabButton isSelected={agent === "pBoss"} onClickThisBut={() => clickTabButton("pBoss")}> P'Boss </TabButton>
            <TabButton isSelected={agent === "rhungNoi"} onClickThisBut={() => clickTabButton("rhungNoi")}> rhung'noi </TabButton>

            {/* หาก description มีการเปลี่ยนแปลง example ก็จะแสดงผลต่างออกไปตามค่าของ description */}
          </menu>


            {agent ?
              <div id="tab-content">
                <p> {EXAMPLES[agent].title} </p>
                <p> {EXAMPLES[agent].description} </p>
                <p> {EXAMPLES[agent].code} </p>
              </div>
              :
              <div>
                <h6> please choose your agent.</h6>
              </div>
            }

        </section>
      </main> 
    </Fragment>
  );
}

export default App;
