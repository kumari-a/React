import Header from './components/header';
import { CORE_CONCEPTS ,EXAMPLES } from './assets/data';
import Core_Compoenets from './components/core_components';
import Tab from './components/tabbutton';
import {STATE, useState} from 'react';





function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  return (

    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
          {CORE_CONCEPTS.map((conceptItem)=><Core_Compoenets{...conceptItem} />)}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
