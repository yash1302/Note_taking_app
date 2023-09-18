import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default function Notes({id ,text,date,handleDeleteNote}) {
    return (
        <div className='note bg-[#fef68a]  rounded-xl p-4 min-h-[190px] flex flex-col justify-between text-lg whitespace-pre-wrap' >
            <span>{text}</span>
            <div className='flex item-center justify-between'>
                <small>{date}</small>
                <MdDeleteForever onClick={()=>handleDeleteNote(id)} className='delete-icon hover:cursor-pointer' />
            </div>
        </div>
    )
}
