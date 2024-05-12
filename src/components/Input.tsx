import React, { useEffect } from 'react'

function Input({
    placeHolder,
    inputType,
    max,
    error,
    autoFocus,
    onChange,
    
    value
}: {
    placeHolder: string,
    inputType: string,
    max: number,
    error: string
    autoFocus: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string
}) {
    useEffect(() => {
        if(autoFocus) {
            const input = document.getElementById(`input-${placeHolder}`)
            input?.focus()
        }
    }, [autoFocus, placeHolder])
  return (
    <div>
      <input
      value={value}
      id={`input -${placeHolder}`} 
      type={inputType}
      autoComplete='off'
      maxLength={max}
      onChange={onChange}
      className='block w-full bg-[#E7E5E5] text-[#1f130f] border border-gray-300 rounded-sm py-2.5 px-3 focus:outline-none'
      />
      {error && (
        <span className='text-red-500 text-[14px] font semibold'>{error}</span>
      )}
    </div>
  )
}

export default Input
