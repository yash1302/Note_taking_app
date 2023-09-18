import React, { useState } from 'react';


export default function NewNote({ handleAddNote }) {
    const [noteText, setnoteText] = useState('');

    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setnoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setnoteText('');
        }
    }

    return (
        <div className=' bg-[#AE445A]  rounded-xl p-4 min-h-[190px] flex flex-col justify-between text-lg'>
            <textarea
                cols=" 8"
                rows="8"
                placeholder='type a new note...'
                value={noteText}
                onChange={handleChange}
                className='border-none resize-none bg-[#AE445A]'></textarea>
            <div className='flex item-center justify-between'>
                <small>{characterLimit - noteText.length} remaining</small>
                <button className='save bg-[#E8BCB9] border-none rounded-xl py-[5px] px-[10px] text-[#AE445A]' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

