import React from 'react';
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import notes from "./notes"
import CreateArea from "./CreateArea";



function Apps(){
   
    const [newNotes,setNewNotes] = React.useState([]);

    function notesAccess(titles,contents){
        const notes ={title: titles,
        content: contents}
        setNewNotes(preNotes => {
            return [...preNotes, notes];
        })
    }
        function deleteItem(id){
            setNewNotes((prevNotes)=>{
                return prevNotes.filter((item,itemId)=>{
                    if(itemId!==id){
                        return prevNotes;
                    }
                })
            })
        }
    return <div>
        <Header />
        <CreateArea noteAcc={notesAccess}/>
        {newNotes.map((array,index) =>{
            return <Note key={index} id={index} title={array.title} content={array.content}  delfn={deleteItem}/>
        })}
        <Footer />
    </div>
}
export default Apps;
