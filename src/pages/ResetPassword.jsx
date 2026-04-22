import { Link } from 'react-router-dom'
import lightLogo from '../assets/light-logo-2.png'
import InputField from '../components/FormFields/InputField'
import { useFormik } from 'formik'
import * as yup from "yup"
import Button from '../components/Button'


function ResetPassword() {

  const validationSchema = yup.object({
    email: yup
    .string()
    .email()
    .matches(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-_]+\.[A-Za-z]{2}/)
    .required()
  })

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => console.log(values)
  })

  console.log(formik.errors)
  return (
    <>
      <div className='flex justify-center items-center h-[100vh] p-[20px]'>
        <div className='flex flex-col gap-5'>

            {/* Login Form */}
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[20px] w-[400px] p-[30px] rounded-xl shadow-[0px_0px_2px_rgba(0,0,0,0.5)]'>
                {/* Login Header Logo */}
                <div className='flex justify-center items-center'>
                    <img className="h-[25px] px-2" src={lightLogo} alt="" />
                    <h1 className="font-bold text-[22px] text-(--text)">
                      <span className="text-(--primary)">Infra</span>
                      Ledger
                    </h1>
                </div>
                <div>
                    <h1 className='font-bold text-xl text-center text-(--text)'>Reset your password</h1>
                    <p className='text-sm text-center mt-1 text-(--grey)'>Enter your email address and we'll help you get back into your account.</p>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <InputField id="email" name="email" placeholder="example@company.com" label="Email" formik={formik} />
                    <p className='text-(--grey) text-[13px]'>We'll send a secure, single-use reset link to this address.</p>
                    <Button type="submit" value="Sign In" />
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
