import React from 'react'

export default function Header({ handleToggleDarkMode }) {
    return (
        <div className='flex justify-between items-center py-6'>
            <h1 className='text-2xl text-[#662549]'>NOTE TAKING APP</h1>
            <button
                onClick={
                    () => handleToggleDarkMode(
                         (previouDarkMode) => !previouDarkMode)
                } 
                className='bg-[#e1e1e1] border-none rounded-xl py-[5px] px-[10px] text-[#AE445A]'>Toggle</button>
        </div>
    )
}
