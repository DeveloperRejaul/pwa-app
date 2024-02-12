import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';

function VerifyIn({ onChange, name }) {
    const onInvalid = (e) => {
        e.target.setCustomValidity(' ');
        e.target.style.borderColor = 'red';
    };
    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <input type="text" onChange={onChange} name={name} required onInvalid={(e) => onInvalid(e)} maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" className="otpInput w-[3.664rem] h-[3.25rem] p-2.5 text-cMd text-subInfo text-center rounded-lg border border-borderColor focus:shadow-sm focus:shadow-secondary outline-none selection:bg-transparent " />
    );
}
export default function Otp({ setState }) {
    const { handleSubmit } = useForm();
    const [otp, setOtp] = useState({
        one: null,
        two: null,
        three: null,
        four: null,
    });
    const onSubmit = () => {
        const inputOtp = Object.values(otp).join('');
    };
    const onChangeVal = (e) => {
        if (!e.target.value) {
            e.target.style.borderColor = '#E2E8F0';
        }
        if (e.key === 'Backspace' && !e.target.value) {
            e.target.previousSibling?.focus();
        }
        if (e.target.value) {
            e.target.nextSibling?.focus();
        }
        setOtp({ ...otp, [e.target.name]: e.target.value });
    };
    return (
        <Modal setState={setState}>
            <div className="pt-11 px-11 space-y-2">
                <h2 className=" text-2xl font-bold text-gray">Enter the vertification code</h2>
                <p className="text-sm">We have sent a verification code to the email address you provided.</p>
            </div>
            <div className=" p-11 space-y-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div role="contentinfo" className="flex justify-center xl:space-x-[1.25rem] gap-x-2 xl:gap-x-4 py-5" onKeyDown={(e) => onChangeVal(e)}>
                        <VerifyIn onChange={(e) => onChangeVal(e)} name="one" />
                        <VerifyIn onChange={(e) => onChangeVal(e)} name="two" />
                        <VerifyIn onChange={(e) => onChangeVal(e)} name="three" />
                        <VerifyIn onChange={(e) => onChangeVal(e)} name="four" />
                    </div>
                    <div className="text-right">
                        <p>you didn`t receive code? <span className="text-primary cursor-pointer" onClick={() => setState((prev) => ({ ...prev, otp: false, forget: true }))}>Resend</span></p>
                    </div>
                </form>
            </div>
            <div className="px-11 pb-5">
                <Button text="Update Password" className="h-16 w-full" onClick={() => setState(true)} />
            </div>
        </Modal>
    )
}
