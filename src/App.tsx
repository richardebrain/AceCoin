import mastercard from './assets/mastercard-logo.png'

import creditCardChip from './assets/credit-card-chip.jpeg'
import { useState } from 'react'
import { removeDash } from './helpers'
import PayForm from './components/PayForm'


export type FormValue = {
  cardNumber: string,
  cvv: string,
  expiryYear: string,
  expiryMonth: string,
  password: string
}

function App() {
  const [formValue, setFormValue] = useState<FormValue>({
    cardNumber: '2412  -  7512  -  3412  -  3456',
    cvv: '327',
    expiryYear: '09',
    expiryMonth: '12',
    password: '123456'
  })



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'cardNumber') {
      if (value.length === 32) {
        return
      }
      const val = removeDash(value)
      if (isNaN(Number(val))) return
      setFormValue({
        ...formValue,
        [name]: val
      })

    }
    if (name === 'cvv') {
      if (value.length > 3 || isNaN(Number(value))) {
        return
      }
    }
    // expiry month
    if (name == 'expiryMonth') {
      if (isNaN(Number(value)) || value.length > 2) {
        return
      }
      if (Number(value) > 12) {
        alert('Invalid month')
        setFormValue({
          ...formValue,
          [name]: ''
        })
        return
      }

    }
    // expiryYear
    if (name === 'expiryYear') {
      if (isNaN(Number(value)) || value.length > 2) {
        return
      }
    }
    if(name === 'password'){
      if(value.length > 6 || isNaN(Number(value))){
        return
      }
    }
    setFormValue({
      ...formValue,
      [name]: value
    })

  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Payment Successful')
    setFormValue({
      cardNumber: '',
      cvv: '',
      expiryYear: '',
      expiryMonth: '',
      password: ''
    })
  }

  const lastFour = removeDash(formValue.cardNumber).slice(removeDash(formValue.cardNumber).length - 4)

  return (
    <div className={`bg-[url('./assets/spiral.jpeg')] bg-center bg-cover bg-no-repeat relative py-28 sm:h-screen`}>
      <div className='shadow bg-white md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 w-11/12 h-full container mx-auto flex flex-col md:flex-row justify-between p-5 lg:p-10 py-10 pt-20 2xl:h-fit'>
        {/* left container */}
        <div className='flex flex-col w-full md:w-7/12 lg:w-8/12'>
          {/* header */}
          <div className='flex items-center mb-2 pb-10 w-full'>
            <div className='flex-1 items-center flex sm:text-lg font-semibold text-gray-400'>
              <span className='h-12 inline-block w-12 rounded-full bg-[#025efe] mr-2 text-white text-center pt-3 sm:pt-2'>ACP</span>
              <span className=' sm:font-bold text-black'>AceCoin</span>Pay
            </div>
            <div className='flex items-center gap-px text-sm'>
              <span className='bg-[#1e2a53] text-white rounded-md px-[7px] sm:px-[10px] py-1'>0</span>
              <span className='bg-[#1e2a53] text-white rounded-md px-[7px] sm:px-[10px] py-1'>1</span>
              <span className='mx-px'>:</span>
              <span className='bg-[#1e2a53] text-white rounded-md px-[7px] sm:px-[10px] py-1'>1</span>
              <span className='bg-[#1e2a53] text-white rounded-md px-[7px] sm:px-[10px] py-1'>9</span>
            </div>
          </div>
          {/* form */}
          <PayForm formValue={formValue} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>


        {/* right container */}
        <div className='flex-1 w-3/12 h-full  ml-6 xl:ml-12 2xl:ml-16 relative hidden md:block 2xl:h-fit'>
          {/* blue chip */}
          <div className="-top-1 -translate-x-1/2 left-1/2 w-12 h-3 bg-blue-500 absolute rounded-sm">
            <div className="top-2 -translate-x-1/2 left-1/2 w-[58px] h-5 bg-blue-500 absolute blur-[5px]"></div>
          </div>
          {/* opacity card */}
          <div className='py-7 pt-8 h-72  absolute top-0 -translate-x-1/2 left-1/2 bg-[#fefefe] drop-shadow-2xl px-4 z-20 mx-auto md:w-10/12 lg:w-9/12  xl:w-9/12 rounded-lg opacity-[85%] overflow-hidden'>
            <span className="rounded-full top-12 w-72 inline-block -right-8 absolute h-72 border-2 z-0 border-gray-50"></span>
            <span className="rounded-full top-20 w-72 -right-10 inline-block absolute h-72 border-2 z-0 border-gray-50"></span>
            <span className="rounded-full top-28 w-60 inline-block absolute h-60 border-2 z-0 border-gray-50"></span>
            <div className='flex justify-between mb-16 z-10 relative'>
              <img src={creditCardChip} alt='mastercard-logo' height={24} width={36} className='' />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
              </svg>
            </div>
            <div className='flex flex-col justify-between relative z-40'>

              <div className='fle flex-col mb-2'>
                <span className='text-xs font-semibold mb-1 inline-block'>Jonathan Michael</span>
                <div className='flex gap-2 font-bold'>
                  <span>****</span>
                  <span>{removeDash(formValue.cardNumber).length === 16 && lastFour}</span>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <span className='font-semibold text-sm'>{formValue.expiryMonth && formValue.expiryMonth + '/'}{formValue.expiryYear && formValue.expiryYear}</span>
                <div className='flex flex-col items-center'>
                  <img src={mastercard} alt='mastercard-logo' height={32} width={60} className='' />
                  <span className='text-[10px] font-bold'>mastercard</span>
                </div>
              </div>
            </div>
          </div>
          {/* product */}
          <div className='bg-[#eff5f9] pt-52 px-8 pb-8 w-full mt-28 rounded-t-lg radical-gradient text-sm'>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-400 font-semibold'>Company</span>
              <span className='font-bold'>Apple</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-400 font-semibold'>Order Number</span>
              <span className='font-bold'>1837337</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-400 font-semibold'>Product</span>
              <span className='font-bold'>Macbook Air</span>
            </div>
            <div className='flex justify-between '>
              <span className='text-gray-400 font-semibold'>VAT(20%)</span>
              <span className='font-bold'>$100.00</span>
            </div>
          </div>
          {/* total */}
          <div className='bg-[#eff5f9] py-5 px-5 w-full rounded-b-md top-radical border-dashed border-t-2 border-gray-400 flex justify-between'>
            <div className='flex flex-col'>
              <span className='text-xs font-semibold'>You have to Pay</span>
              <div className='font-bold text-2xl'>549
                <span className='text-base font-semibold text-gray-700'>.99</span>
                <span className='text-base text-gray-400 ml-2'>USD</span>
              </div>
            </div>
            <div className='mt-3'>
              <svg width="24" height="24" className='text-gray-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18H17V16H7V18Z" fill="currentColor" /><path d="M17 14H7V12H17V14Z" fill="currentColor" /><path d="M7 10H11V8H7V10Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" /></svg>
            </div>
          </div>
        </div>


      </div >
    </div >
  )
}

export default App
