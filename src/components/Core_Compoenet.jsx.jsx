import { CORE_CONCEPTS } from '../assets/data';
import Core_Compoenets from './core_components';


export default function Core_Compoenet(){
    return (<section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {CORE_CONCEPTS.map((conceptItem)=><Core_Compoenets{...conceptItem} />)}
        </ul>
    </section>
    );
}