import React from "react"
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function AddNoteBox(props) {
    const [newNote, setNewNote] = React.useState({
        title: "",
        content: ""
    })

    function noteHandle(event) {
        const { name, value } = event.target
        setNewNote((prevNote) => {
            if (name === "newNoteTitle") {
                return {
                    title: value,
                    content: prevNote.content
                }
            } else if (name === "newNoteContent") {
                return {
                    title: prevNote.title,
                    content: value
                }
            }
        })
    }

    function clearNewNote() {
        setNewNote(() => {
            return {
              title: "",
              content: ""
            }
          })
    }

    const [reveal, setReveal] = React.useState(false);

    function revealHandle() {
        setReveal(true)
    }

    return (
        <div className="newNoteClass" style={{minHeight: reveal ? "300px" : "100px"}}>
            <form onSubmit={props.buttonClick}>
                {reveal ? <input onChange={noteHandle} name="newNoteTitle" placeholder="Title of the note" autoComplete="off" value={newNote.title}></input> : null}  
                <textarea onClick={revealHandle} rows={reveal ? "5" : "2"} onChange={noteHandle} name="newNoteContent" placeholder="Write a new note here!" autoComplete="off" value={newNote.content}></textarea>
                {reveal ? (<Zoom in={true}>
                <button
                onClick={() => {
                    clearNewNote();
                    {props.buttonClick(newNote)}   
                }}
                className="submitNewNoteButton"><AddIcon sx={{ fontSize: 60 }}/></button>
                </Zoom>) : null}
            </form>
        </div>
    )
}

export default AddNoteBox