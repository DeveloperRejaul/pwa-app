import React, { useState } from 'react'
import CheckBox from '../checkBox/CheckBox';

export default function TblRow({ children, checkBox = false, id = 0, className = "", selectList = [], setSelectList = () => { } }) {
    const [checkRow, setCheckRow] = useState(false);
    const onCheck = () => {
        // setCheckRow(!checkRow);
        setSelectList((prev) => prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]);
    }
    return (
        checkBox ? (
            <td>
                <div className={`flex justify-center h-full py-[1.813rem]  border-l-[0.438rem] ${selectList.includes(id) ? 'border-primary' : ' border-transparent'} ${className}`}>
                    <CheckBox onCheck={onCheck} checked={selectList.includes(id)} />
                </div>
            </td>
        ) : <td className={`px-3 ${className}`}>{children}</td>
    )
}
