import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Sections/Sections";

export function Examples() {
    // state that can management by hook is useState();
    const [agent, setAgent] = useState();

    // this event is create when you click this component.
    const clickTabButton = (message) => {
        setAgent(message);
    }

    return (
        <Section title="Select Your Agent." id="examples">
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

        </Section>
    );
}