import React, { useEffect, useRef, useState } from 'react';
import { ArrowBottom } from '../../asset/icon';

const DefaultOpts = [{ id: 1, name: 'Option 1' }, { id: 2, name: 'Option 2' }, { id: 3, name: 'Option 3' }, { id: 4, name: 'Option 4' }];
export default function CusDropdown({ DefaultVal = "Select", Opts = DefaultOpts }) {
    const refDropdown = useRef();
    const [selectOpt, setSelectOpt] = useState(DefaultVal);

    const getSugBar = () => {
        const dpd = refDropdown.current.querySelector('.customStyleDropdown');
        const check = dpd.classList.contains('hidden');
        return { check, dpd };
    }

    const onOpen = () => {
        const { check, dpd } = getSugBar();
        if (check) dpd.classList.remove('hidden');
        else dpd.classList.add('hidden');
    };

    useEffect(() => {
        const outsideClick = (e) => {
            if (refDropdown.current && !refDropdown.current.contains(e.target)) {
                const { check, dpd } = getSugBar();
                if (!check) dpd.classList.add('hidden');
            }
        }
        document.addEventListener('mousedown', outsideClick);
        return () => document.removeEventListener('keydown', outsideClick);
    }, []);

    const onSelect = (opt) => {
        setSelectOpt(opt);
        const { check, dpd } = getSugBar();
        if (!check) dpd.classList.add('hidden');
    }
    return (
        <div ref={refDropdown} className="relative border border-primary border-opacity-40 h-[4.19rem] rounded-[0.46rem]">
            <button
                onClick={onOpen}
                className="capitalize w-full text-left px-[.96rem] py-1
                flex items-center justify-between text-[1.187rem] h-full">
                <p className="">{selectOpt}</p>
                <ArrowBottom />
            </button>
            <div
                className="customStyleDropdown z-10 hidden flex flex-col absolute bg-white w-full text-sm border border-primary border-opacity-50 border-t-0 shadow-md rounded-b-md "
            >
                {Opts.map((d, i) => (
                    <button
                        key={i}
                        className=" px-2 py-1 hover:bg-secondary hover:text-txtPrimary rounded-sm whitespace-nowrap text-left text-gray hover:text-black"
                        onClick={() => onSelect(d.name)}>
                        {d.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

