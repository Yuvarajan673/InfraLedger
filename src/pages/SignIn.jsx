import lightLogo from '../assets/light-logo-2.png'
// import darkLogo from '../assets/dark-logo-2.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup"
import InputField from '../components/FormFields/InputField'

function SignIn() {

    const validationSchema = yup.object({
        email: yup
        .string()
        .email("invalid email format")
        .required("email is required")
        .matches(/^[A-Za-z0-9.]+@[A-Za-z0-9]+\.[A-Za-z]{2}/, "email should be in valid format"),
        password: yup
        .string()
        .required("password is required")
        .min(8)
        .matches(/[A-Z]/, "password must contain atleast one uppercase")
        .matches(/[a-z]/, "password must contain atleast one lowercase")
        .matches(/[0-9]/, "password must contain atleast one number")
        .matches(/[!@#$%^&*<>]/,"password must contain atleast one special character")
    })


    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: async values => {
            const response = await fetch("http://127.0.0.1:4000/api/auth/login",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })

            const data = await response.json()
            localStorage.setItem("token", data.token)
        }
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
                    <h1 className='font-bold text-xl text-center text-(--text)'>Sign in to InfraLedger</h1>
                    <p className='text-sm text-center mt-1 text-(--grey)'>Monitor, manage, and audit your hardware lifecycle from one secure dashboard.</p>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <InputField id="email" name="email" label="Enter Email" placeholder="example@company.com" formik={formik} />
                    <InputField id="password" name="password" label="Enter Password" placeholder="Enter Password" formik={formik} />
                    <Link to='/reset/password' className='text-end text-(--primary) text-sm font-medium cursor-pointer'>Forget Password?</Link>
                    <button className='bg-(--primary) text-(--static-text-light) rounded-[10px] py-[10px] cursor-pointer' type='submit'>Sign in</button>
                    <p className='text-center text-sm text-(--text)'>New to the platform? <Link to='/signup' className='text-(--primary) cursor-pointer font-medium'>Create an account</Link></p>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
