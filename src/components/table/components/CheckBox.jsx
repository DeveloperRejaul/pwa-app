import React from 'react'

export default function CheckBox({ onCheck = () => { }, checked = false }) {
    return (
        <input
            className="h-6
            w-6 
            appearance-none 
            rounded-[0.25rem] 
            border-[0.125rem] 
            border-solid 
            border-primary
            outline-none 
            before:pointer-events-none 
            before:absolute 
            before:h-6
            before:w-6
        checked:border-primary 
            checked:before:opacity-[0.6] checked:after:absolute 
            checked:after:mt-[2px]
            checked:after:ml-[0.50rem]
            checked:after:block
            checked:after:h-3
            checked:after:w-2
            checked:after:rotate-45
            checked:after:border-[0.225rem]
            checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-primary
            cursor-pointer"
            type="checkbox"
            checked={checked}
            onChange={onCheck}
        />
    )
}
