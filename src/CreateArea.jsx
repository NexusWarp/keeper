import React from "react";

function CreateArea(prop) {
    const [nTitle ,setTitle] = React.useState("");
    const [nContent ,setContent] = React.useState("");
    function enterTitle(event){
       let title= event.target.value;
       setTitle(title);
      
    }
    function enterContent(event){
       let content = event.target.value;
       setContent(content);
    }
    function handleClick(event){
        event.preventDefault();
        setTitle("");
        setContent("")
        prop.noteAcc(nTitle,nContent);
    }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={enterTitle} value={nTitle}/>
        <textarea name="content" placeholder="Take a note..." rows="3"  onChange={enterContent} value={nContent}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.use notes to the tiles,hyt
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.