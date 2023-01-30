import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Note from "./Components/Note"
import AddNoteBox from "./Components/AddNoteBox"

function App() {

  const [notesList, setNotesList] = React.useState([])

  function addButtonHandle(newNote) {
    event.preventDefault()
    if (newNote.title === "" || newNote.content === "") {
      console.log("cant")
    } else {
      setNotesList((prevNotes) => {
        return [...prevNotes, newNote]
      })
    }
  }

  function deleteNote(id) {    
    setNotesList((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id
      })
    })
  }
  
  return (
    <div>
      <Header />
        <div className="newNoteSection">
          <AddNoteBox buttonClick={addButtonHandle} />
        </div>
      {notesList.map((item, index) => <Note key={index} id={index} title={item.title} content={item.content} deleteButton={deleteNote}/>)}
      <Footer />
    </div>
  )
}

export default App
