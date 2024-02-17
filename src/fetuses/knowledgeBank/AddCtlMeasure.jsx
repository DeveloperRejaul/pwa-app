import React from 'react';
import Modal from '../../components/modal/Modal';
import Button from '../../components/button/Button';

const CusInput = ({ title = "title", Field = 'input', placeholder = 'Input' }) => (
    <div className="space-y-1 font-medium w-full">
        <p className="text-[1.32rem] whitespace-nowrap">{title}</p>
        <Field className="px-[1.38rem] py-[1.38rem] rounded-[0.448rem] border border-primary border-opacity-20 outline-none w-full text-[1.15rem]" type="text" placeholder={placeholder} />
    </div>

)

export default function AddCtlMeasure({ onClose = () => { } }) {
    return (
        <Modal size onClose={onClose} >
            <div className="text-headline px-[4.75rem] py-[2.94rem] space-y-[3.75rem]" >
                <h2 className="text-[1.63rem] font-semibold">Add Control Measure</h2>
                <div className='space-y-9'>
                    <div className="flex items-center space-x-9">
                        <CusInput title='Brand Name (English)' placeholder='Brand Name' />
                        <CusInput title='Company Name (English)' placeholder='Company Name' />
                        <CusInput title='Dosage Name (English)' placeholder='Dosage Name' />
                    </div>
                    <CusInput Field='Textarea' title='Description (English)' placeholder='Description' />
                </div>
                <div className='space-y-9'>
                    <div className="flex items-center space-x-9">
                        <CusInput title='Brand Name (Hindi)' placeholder='Brand Name' />
                        <CusInput title='Company Name (Hindi)' placeholder='Company Name' />
                        <CusInput title='Dosage Name (Hindi)' placeholder='Dosage Name' />
                    </div>
                    <CusInput Field='Textarea' title='Description (Hindi)' placeholder='Description' />
                </div>
                <div className='space-y-9'>
                    <div className="flex items-center space-x-9">
                        <CusInput title='Brand Name (Marathi)' placeholder='Brand Name' />
                        <CusInput title='Company Name (Marathi)' placeholder='Company Name' />
                        <CusInput title='Dosage Name (Marathi)' placeholder='Dosage Name' />
                    </div>
                    <CusInput Field='Textarea' title='Description (Marathi)' placeholder='Description' />
                </div>
                <div className="space-y-6 font-medium w-full">
                    <p className="text-[1.32rem] whitespace-nowrap">Upload Base Image</p>
                    <div className="">
                        <input type="file" id="uploadImg" className="hidden" />
                        <label htmlFor="uploadImg" className="bg-primary rounded-[0.448rem] text-[1.187rem] font-medium text-light px-[4.63rem] py-[1.19rem]">
                            upload image
                        </label>
                    </div>
                </div>
                <div className='space-y-9'>
                    <div className="flex items-center space-x-9">
                        <CusInput title='Brand Name (English)' placeholder='Brand Name' />
                        <CusInput title='Company Name (English)' placeholder='Company Name' />
                        <CusInput title='Dosage Name (English)' placeholder='Dosage Name' />
                    </div>
                </div>
                <div className="space-x-[0.63rem] flex justify-end">
                    <button className="border border-primary text-primary font-medium h-12 rounded-[.449rem] px-10">Cancel</button>
                    <Button text="Save" className="h-12 px-12" />
                </div>
            </div>
        </Modal>
    )
}
