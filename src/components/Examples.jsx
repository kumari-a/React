import Tab from "./tabbutton";
import { useState } from "react";
import { EXAMPLES } from "../assets/data";
import Sections from "./Sections";
import Tabs from "./Tabs";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }


    return(
        <Sections title="EXAMPLES" id="examples">
         <Tabs ButtonsContainer="menu"
        buttons={
          <>
            <Tab
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </Tab>
            <Tab
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </Tab>
            <Tab
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </Tab>
            <Tab
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </Tab>
          </>
        }
      >
        {tabContent}
      </Tabs>

        </Sections>
    );
}