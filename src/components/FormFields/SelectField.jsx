import React, { useState } from 'react'

function SelectField({id, name, label, options=[], formik}) {
    const [ openDropdown, setOpenDropdown ] = useState(false)
    const hasError = formik ? formik.touched[name] && formik.errors[name] : null
    const isValid = formik ? formik.touched[name] && !formik.errors[name] && formik.values[name] : null
        
    const handleOpenDropdown = () => {
        setOpenDropdown(!openDropdown)
    }

    const handleClick = (option) => {
        formik.setFieldValue(name, option.target.innerText)
        formik.setFieldTouched(name, true)
        setOpenDropdown(false)
    }

  return (
    <div className='flex flex-col gap-1'>
       <label htmlFor="email" className='text-sm text-(--text)'>{label}</label>
       <div name={name} id={id} className='relative'>
        <div className='relative'> 
        <input
        className={`flex items-center justify-between w-full px-[15px] py-[8px] rounded-[10px] text-sm border-[1.5px] var(--grey) border-(--border) outline-0 cursor-pointer ${hasError ? "border-red-500" : isValid ? "border-green-500" : null }`} 
        onClick={handleOpenDropdown}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        readOnly
        value={formik.values[name] || `Select ${name}`}
        />  
            <svg className='text-gray-500 absolute top-[12px] right-[12px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.696 8.72a1.2 1.2 0 0 1-.3.64l-6.09 6.76a1.85 1.85 0 0 1-.58.46a1.7 1.7 0 0 1-1.42.03a1.75 1.75 0 0 1-.62-.42l-6.1-6.83a1.3 1.3 0 0 1-.31-.64a1.31 1.31 0 0 1 .56-1.26a1.36 1.36 0 0 1 .68-.21h13a1.29 1.29 0 0 1 1.15.76c.081.228.092.476.03.71" /></svg>
        </div>

        { openDropdown && 
        <div className='absolute top-[45px] w-full bg-white text-(--text rounded-[10px] text-sm border-[1.5px] var(--grey) border-(--border) outline-0'>
          {options.map((option, index) => <div key={index} className='p-[8px] px-[10px] hover:bg-(--primary) hover:text-white rounded-[5px] m-[5px] cursor-pointer' onClick={handleClick}>{option}</div>)}
        </div> }

       </div>
       {hasError ? (
        <div className='text-red-500 text-[13px] flex items-center gap-[4px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -3 56 56"><path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-8.414-13.5a1.99 1.99 0 0 1-1.992-1.992c0-.539.234-1.008.609-1.36l6.984-7.03l-6.984-7.032a1.8 1.8 0 0 1-.61-1.36c0-1.077.891-1.945 1.993-1.945c.539 0 1.008.211 1.36.586l7.03 7.008l7.079-7.031c.398-.422.82-.61 1.336-.61c1.101 0 1.992.891 1.992 1.97c0 .538-.188.984-.586 1.359l-7.031 7.054l7.007 6.985c.352.375.586.844.586 1.406a1.99 1.99 0 0 1-1.992 1.992a1.93 1.93 0 0 1-1.383-.586l-7.007-7.031l-6.985 7.031a1.93 1.93 0 0 1-1.406.586" /></svg>
            {formik.errors[name]}
        </div>) : (isValid) ? (
        <div className='text-green-500 text-[13px] flex items-center gap-[4px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -1 24 24"><path fill="currentColor" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
            {name} is valid
        </div>
        ) : null
        }
    </div>
  )
}

export default SelectField
