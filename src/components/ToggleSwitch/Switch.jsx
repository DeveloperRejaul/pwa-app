import React from 'react';
import "./switch.css";

export default function Switch({ onClick = () => { } }) {
    return (
        <label className="switch relative inline-block w-[9.88rem] h-[3.25rem] rounded-xl overflow-hidden border border-gray">
            <input type="checkbox" className="opacity-0 w-0 h-0" onChange={onClick} />
            <span className="slider absolute top-0 right-0 bottom-0 left-0 bg-[#E9E9E9] transition-[0.4s] text-center text-secondary font-semibold text-base cursor-pointer" />
        </label>
    )
}
