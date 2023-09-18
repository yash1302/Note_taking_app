import React from 'react'
import Notes from './Notes'
import NewNote from './NewNote'

export default function NotesList({ notes, handleAddNote,handleDeleteNote }) {
  return (
    <div className='notelist grid gap-4 grid-cols-auto'>
      {notes.map((note) => (
        <Notes 
        id={note.id} 
        text = {note.text} 
        date = {note.date}
        handleDeleteNote={handleDeleteNote}
        />
      ))}
      <NewNote handleAddNote={handleAddNote}/>
    </div>
  )
}
