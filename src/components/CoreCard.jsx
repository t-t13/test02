export function CoreCard(props) {
    return (
      <li>
        <img width="400px" height="400px" src={props.image}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>


    );
  }