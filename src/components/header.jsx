import react_img from '../assets/react-core-concepts.png';


const COMPOENTS = [
    'Fundamental' , 'Cruical', 'Core'
  ]


function random_num(max){
    return  Math.floor(Math.random() * (max + 1));
  }

export default function Header(){
    return (
      <header>
          <img src={react_img} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {COMPOENTS[random_num(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }