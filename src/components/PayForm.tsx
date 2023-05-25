import React from 'react'
import mastercard from '../assets/mastercard-logo.png'
import verified from '../assets/verified.png'
import { removeDash } from '../helpers'
import { formatCreditCard } from '../helpers'
import { FormValue } from '../App'

type Props = {
    formValue: FormValue
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: any) => void
}

const PayForm = ({
    formValue,
    handleChange,
    handleSubmit

}: Props) => {
    return (
        <div className='w-full'>
            <form className='w-full'>
                <div className="formgroup flex flex-col ">
                    <label htmlFor="cardNumber" className=' flex justify-between'>
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-sm sm:text-base sm:font-bold'>
                                Card Number
                            </h3>
                            <span className='text-xs font-medium text-gray-400 mt-1'>Enter the 16-digits card number on the card</span>
                        </div>
                        <span className='text-[#025efe] font-semibold flex items-center cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#025efe" viewBox="0 0 24 24" strokeWidth="5" stroke="#025efe" className="w-4 h-4 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            Edit
                        </span>
                    </label>
                    {/* input */}
                    <div className='mt-2 sm:mt-5 md:mt-0 relative text-gray-400 font-medium'>
                        <input
                            type="text"
                            name='cardNumber'
                            id='cardNumber'
                            onChange={handleChange}
                            value={formatCreditCard(formValue.cardNumber)}
                            className='border-2 h-[52px] px-8 sm:px-16 py-2 w-full font-semibold border-gray-300 outline-0 rounded-md focus:border-[#025efe] focus:bg-[#f0f5ff] focus:text-[#025efe]'
                        />
                        <img src={mastercard} alt='mastercard-logo' height={28} width={28} className='absolute top-1/2 -translate-y-1/2 left-1 sm:left-4' />
                        {removeDash(formValue.cardNumber).length === 16 && <img src={verified} alt='verified-logo' height={28} width={28} className='absolute top-1/2 -translate-y-1/2 right-1 sm:right-4 bg-white duration-500' />}

                    </div>
                </div>
                <div className="formgroup mt-5 sm:mt-3 md:mt-6 lg:mt-8 flex justify-between items-start flex-col sm:flex-row sm:items-center ">
                    <label htmlFor="cvv" className=' flex flex-col flex-1'>
                        <h3 className='font-semibold text-sm sm:text-base sm:font-bold'>
                            CVV Number
                        </h3>
                        <span className='text-xs font-medium text-gray-400 mt-1'>Enter the 3-digits card number on the card</span>
                    </label>
                    {/* input */}
                    <div className='mt-2 sm:mt-5 md:mt-0 relative  text-black w-full md:w-3/5 lg:w-2/5 sm:w-2/5'>
                        <input
                            type="text"
                            name='cvv'
                            id='cvv'
                            onChange={handleChange}
                            value={formValue.cvv}
                            placeholder='CVV'
                            className='border-2 h-[52px] pl-32 pr-16 sm:pl-24 font-bold py-2 w-full border-gray-300 outline-0 rounded-md focus:border-[#025efe] focus:bg-[#f0f5ff] focus:text-[#025efe]'
                        />
                        <svg width="24" height="24" className='absolute top-1/2 -translate-y-1/2 right-4 text-gray-400' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="currentColor" /><path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="currentColor" /><path d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z" fill="currentColor" /><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="currentColor" /><path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" /><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="currentColor" /><path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="currentColor" /><path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="currentColor" /><path d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z" fill="currentColor" /></svg>
                    </div>

                </div>
                <div className="formgroup mt-5 sm:mt-3 md:mt-6 lg:mt-8 flex justify-between items-start flex-col sm:flex-row sm:items-center">
                    <label htmlFor="expiryMonth" className=' flex flex-col flex-1'>
                        <h3 className='font-semibold text-sm sm:text-base sm:font-bold'>
                            Expiry Date
                        </h3>
                        <span className='text-xs font-medium text-gray-400 mt-1'>Enter the expiry date of the card</span>
                    </label>
                    {/* input */}
                    <div className='mt-2 sm:mt-5 md:mt-0 flex relative items-center text-black w-full md:w-3/5 lg:w-2/5 sm:w-2/5'>
                        <input
                            type="text"
                            name='expiryMonth'
                            onChange={handleChange}
                            value={formValue.expiryMonth}
                            placeholder='MM'
                            id='expiryMonth'
                            className='border-2 h-[52px] px-12 sm:px-8 md:px-6 py-2 font-bold w-1/2 border-gray-300 outline-0 rounded-md focus:border-[#025efe] focus:bg-[#f0f5ff] focus:text-[#025efe]'
                        />
                        <span className='font-semibold  text-black mx-2'>/</span>
                        <input
                            type="text"
                            name='expiryYear'
                            onChange={handleChange}
                            value={formValue.expiryYear}
                            placeholder='YY'
                            id='expiryYear'
                            className='border-2 h-[52px] px-12 sm:px-8 md:px-6 font-bold py-2 w-1/2 border-gray-300 outline-0 rounded-md focus:border-[#025efe] focus:bg-[#f0f5ff] focus:text-[#025efe] '
                        />

                    </div>

                </div>
                <div className="formgroup mt-5 sm:mt-3 md:mt-6 lg:mt-8 flex justify-between items-start flex-col sm:flex-row sm:items-center">
                    <label htmlFor="password" className=' flex flex-col flex-1'>
                        <h3 className='font-semibold text-sm sm:text-base sm:font-bold'>
                            Password
                        </h3>
                        <span className='text-xs font-medium text-gray-400 mt-1'>Enter your Dynamic password</span>
                    </label>
                    {/* input */}
                    <div className='mt-2 sm:mt-5 md:mt-0 relative  text-black w-full md:w-3/5 lg:w-2/5 sm:w-2/5'>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            value={formValue.password}
                            onChange={handleChange}
                            className='border-2 h-[52px] pl-4 font-bold pr-16 py-3 w-full border-gray-300 outline-0 rounded-md text-xl focus:border-[#025efe] focus:bg-[#f0f5ff] focus:text-[#025efe]'
                        />
                        <svg width="24" height="24" className='absolute top-1/2 -translate-y-1/2 right-4 text-gray-400' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="currentColor" /><path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="currentColor" /><path d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z" fill="currentColor" /><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="currentColor" /><path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" /><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="currentColor" /><path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="currentColor" /><path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="currentColor" /><path d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z" fill="currentColor" /></svg>

                    </div>

                </div>
                <button
                    className='w-full py-4 bg-[#025efe] text-white mt-10 rounded-md'
                    onClick={handleSubmit}
                    type='button'
                >Pay Now</button>
            </form>
        </div>
    )
}

export default PayForm