import Tab from "./tabbutton";
import { useState } from "react";
import { EXAMPLES } from "../assets/data";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
    return(
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <Tab isSelected = {selectedTopic === 'components'}onSelect={() => handleSelect('components')}>Components</Tab>
            <Tab isSelected = {selectedTopic === 'jsx'}onSelect={() => handleSelect('jsx')}>JSX</Tab>
            <Tab isSelected = {selectedTopic === 'props'}onSelect={() => handleSelect('props')}>Props</Tab>
            <Tab isSelected = {selectedTopic === 'state'}onSelect={() => handleSelect('state')}>State</Tab>
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : <div id='tab-content'>

            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>

          </div>}

        </section>
    );
}