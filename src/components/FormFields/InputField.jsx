import React from 'react'

function InputField({ label, type="text", name, id, placeholder, max, formik }) {
  const isError = formik ? formik.touched[name] && formik.errors[name] : null
  const isValid = formik ? formik.touched[name] && !formik.errors[name] && formik.values[name] : null

  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='text-sm text-(--text)'>{label}</label>
        <input 
        type={type} 
        className={`text-(--text) px-[15px] py-[8px] rounded-[10px] text-sm border-[1.5px] var(--grey) outline-none transition-colors duration-400 ${isError ? "border-red-500" : isValid ? "border-green-500" : "border-(--border)"}`} 
        id={id} 
        name={name} 
        max={max}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        />
    { isError ? (
        <div className='text-red-500 text-[13px] flex items-center gap-[4px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -3 56 56"><path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-8.414-13.5a1.99 1.99 0 0 1-1.992-1.992c0-.539.234-1.008.609-1.36l6.984-7.03l-6.984-7.032a1.8 1.8 0 0 1-.61-1.36c0-1.077.891-1.945 1.993-1.945c.539 0 1.008.211 1.36.586l7.03 7.008l7.079-7.031c.398-.422.82-.61 1.336-.61c1.101 0 1.992.891 1.992 1.97c0 .538-.188.984-.586 1.359l-7.031 7.054l7.007 6.985c.352.375.586.844.586 1.406a1.99 1.99 0 0 1-1.992 1.992a1.93 1.93 0 0 1-1.383-.586l-7.007-7.031l-6.985 7.031a1.93 1.93 0 0 1-1.406.586" /></svg>
            {formik.errors[name]}
        </div>
    ): (isValid) ? (
        <div className='text-green-500 text-[13px] flex items-center gap-[4px] '>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -1 24 24"><path fill="currentColor" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
            {name} is valid
        </div>
    ): null}
    </div>
  )
}

export default InputField
