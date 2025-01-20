import React from 'react'

export const PrimaryButton = ({ onClick, label, icon }) => {
  return (
    <button 
    onClick={onclick}
    className='bg-zinc-800 rounded-lg px-3 py-2'
    >
        {label}
    </button>
  )
}

export const PrimaryLink = ({ route, label, icon }) => {
  return (
    <a href={route} className='flex flex-row items-center justify-center bg-zinc-800 rounded-lg px-3 py-2 w-fit text-white gap-2'>
        {label}
        {icon}
    </a>
  )
}

