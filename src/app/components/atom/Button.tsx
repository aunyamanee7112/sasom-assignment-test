import React from 'react'


interface IButtonComponent {
  label: string;
  variant: "primary" | "secondary" ;
}
export const Button = ({label,variant}:IButtonComponent) => {
  return (
    <div className={`cursor-pointer w-full px-10 py-5 text-center rounded-lg ${variant === 'primary' ? 'bg-neutral-900' : 'bg-green-100'} text-white uppercase hover:opacity-[0.9]`}>{label}</div>
  )
}
