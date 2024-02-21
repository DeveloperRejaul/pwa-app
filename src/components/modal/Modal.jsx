import React, { useRef } from 'react'

export default function Modal({ children, setState = () => { }, size = false, onClose = () => { } }) {
    const refModal = useRef();

    const onClosing = (e) => {
        if (refModal?.current?.contains && !refModal.current.contains(e.target)) {
            onClose();
        }
    }
    return (
        <div className="relative z-10">
            <div
                className="fixed inset-0 bg-opacity-40 transition-opacity bg-gray"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div
                    className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                    onClick={onClosing}
                    role="contentinfo"
                    onKeyDown={() => { }}
                >
                    <div ref={refModal} className={`max-h-[90vh] overflow-auto no-scrollbar relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full ${size ? 'sm:max-w-[80%]' : 'sm:max-w-lg'}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
