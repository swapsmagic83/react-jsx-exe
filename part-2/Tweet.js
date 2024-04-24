const Tweet = (props) =>{
    return (
        <div className="tweet">
            <h1 className="name">Name: {props.name}</h1>
            <h3 className="username">username: {props.username}</h3>
            <h3 className="date">Date: {props.date}</h3>
            <p className="msg">tweet : {props.msg}</p>

        </div>
    )
}