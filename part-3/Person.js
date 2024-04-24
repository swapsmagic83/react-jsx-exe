const Person = (props) =>{
   
    let name = (props.name).slice(0,6);
    let reply= (props.age) >=18 ? "please go vote!" : "you must be 18"
    let h= (props.hobbies).map(h => <li>{h}</li>)
    return(
        <div>
            <p>Learn some informations about this person </p>
            <h1>{name}</h1>
           
            <h3>{reply}</h3>
            <ul>
                {h}
            </ul> 
        </div>
    )
}