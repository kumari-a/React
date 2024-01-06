export default function Core_Compoenets(props){
    return(
      <li>
        <img src ={props.image} alt  ={props.title}/>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
      </li>
    )
  }