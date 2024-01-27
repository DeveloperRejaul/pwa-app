import React, { useState } from 'react'
import CheckBox from './CheckBox';

export default function TblRow({ children, checkBox = false, className = "" }) {
    const [checkRow, setCheckRow] = useState(false);
    const onCheck = () => setCheckRow(!checkRow);
    return (
        checkBox ? (
            <td>
                <div className={`${className} flex justify-center h-full py-[1.813rem]  border-l-[0.438rem] ${checkRow ? 'border-primary' : ' border-transparent'} `}>
                    <CheckBox onCheck={onCheck} checked={checkRow} />
                </div>
            </td>
        ) : <td className={`px-3 ${className}`}>{children}</td>
    )
}
