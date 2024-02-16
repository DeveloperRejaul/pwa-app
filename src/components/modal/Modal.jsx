import React, { useRef } from 'react'

export default function Modal({ children, setState = () => { }, size = false }) {
    const refModal = useRef();

    const onClose = (e) => {
        if (refModal?.current?.contains && !refModal.current.contains(e.target)) {
            setState({ forget: false, pass: false, otp: false });
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
                    onClick={onClose}
                    role="contentinfo"
                    onKeyDown={() => { }}
                >
                    <div ref={refModal} className={`elative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full ${size ? 'sm:max-w-[80%]' : 'sm:max-w-lg'}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
