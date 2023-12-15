import React from "react";

function Note(props){
    function handleClick(){
        props.delfn(props.id);
    }
    return <div className="note">
        <h1><div className="dot"></div>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><span className="material-symbols-outlined">

</span></button>
    </div>
}
export default Note;