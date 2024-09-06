import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Sections/Sections";
import Tabs from "../Tabs/Tab";

export function Examples() {
    // state that can management by hook is useState();
    const [agent, setAgent] = useState();

    // this event is create when you click this component.
    const clickTabButton = (message) => {
        setAgent(message);
    }

    let tabContent = <h2> please choose your agent.</h2>;

    agent ? tabContent =
        <div id="tab-content">
            <p> {EXAMPLES[agent].title} </p>
            <p> {EXAMPLES[agent].description} </p>
            <p> {EXAMPLES[agent].code} </p>
        </div>
        :
        <h2> please choose your agent.</h2>;

    return (

        <Section title="Select Your Agent." id="examples">
            <Tabs
                tabButton={
                    <>
                        <TabButton isSelected={agent === "gojo"} onClickThisBut={() => clickTabButton("gojo")}> gojo </TabButton>
                        <TabButton isSelected={agent === "frog"} onClickThisBut={() => clickTabButton("frog")}> frog </TabButton>
                        <TabButton isSelected={agent === "pBoss"} onClickThisBut={() => clickTabButton("pBoss")}> P'Boss </TabButton>
                        <TabButton isSelected={agent === "rhungNoi"} onClickThisBut={() => clickTabButton("rhungNoi")}> rhung'noi </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>

        </Section>
    );
}