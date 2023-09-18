import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Header from "./components/Header";


function App() {
  const [notes, setnotes] = useState([
    {
      id: nanoid(),
      text: "this is first note!!!",
      date: "12/12/2023"
    },
    {
      id: nanoid(),
      text: "this is second note!!!",
      date: "09/12/2023"
    },
    {
      id: nanoid(),
      text: "this is third note!!!",
      date: "23/12/2023"
    },
    {
      id: nanoid(),
      text: "this is new note!!!",
      date: "23/12/2023"
    },
    
  ]);

   
  const [darkmode, setdarkmode] = useState(false)

  useEffect(()=>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes){
      setnotes(savedNotes);
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
      );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setnotes(newNotes);
  }

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((notes) => notes.id !== id)
    setnotes(newNotes);
  }


  


  return (
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className="max-w-[960px] mx-auto min-h-[100vh]">
        <Header handleToggleDarkMode={setdarkmode} />
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={handleDeleteNote} />
      </div>

    </div>
  );
}

export default App;
