import React from 'react'

interface ButtonProps {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}

interface LinkProps {
  route: string;
  label: string;
  icon?: React.ReactNode;
}

export const PrimaryButton = ({ onClick, label, icon }: ButtonProps) => {
  return (
    <button 
    onClick={onClick}
    className='bg-zinc-800 rounded-lg px-3 py-2'
    >
        {label}
    </button>
  )
}

export const PrimaryLink = ({ route, label, icon }: LinkProps) => {
  return (
    <a href={route} className='flex flex-row items-center justify-center bg-zinc-800 rounded-lg px-3 py-2 w-fit text-white gap-2'>
        {label}
        {icon}
    </a>
  )
}

