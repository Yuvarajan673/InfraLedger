import { Link } from 'react-router-dom'
import lightLogo from '../assets/light-logo-2.png'
import * as yup from "yup"
import { useFormik } from 'formik'
import InputField from '../components/FormFields/InputField.jsx'


function SignUp() {

    const validationSchema = yup.object({
        name: yup
        .string()
        .max(100)
        .matches(/^[^\s]*[A-Za-z\s]+[^\s]$/, "whitespace is not allowed")
        .required("name is required"),
        companyName: yup
        .string()
        .max(100)
        .matches(/[^\s]/, "whitespace is not allowed")
        .required("company name is required"),
        email: yup
        .string()
        .email()
        .matches(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/, "Enter a valid work email")
        .matches(/[^\s]/, "whitespace not allowed")
        .required("email is required"),
        password: yup
        .string()
        .required("password is required")
        .min(8)
        .matches(/[^\s]/, "whitespace not allowed")
        .matches(/[A-Z]/, "password must contain atleast one uppercase")
        .matches(/[a-z]/, "password must contain atleast one lowercase")
        .matches(/[0-9]/, "password must contain atleast one number")
        .matches(/[!@#$%^&*?<>{}|]/, "password must contain atleast one special character"),
        confirmPassword: yup
        .string()
        .required("confirm password is required")
        .oneOf([yup.ref("password"), null], 'Passwords do not match')
        
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            companyName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: validationSchema,
        onSubmit: async values => {
            const response = await fetch("http://127.0.0.1:4000/api/auth/register",{
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(values)
            })
            const data = await response.json()
            console.log(data)
        }
    })

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
                    <h1 className='font-bold text-xl text-center text-(--text)'>Create your account</h1>
                    <p className='text-sm text-center mt-1 text-(--grey)'>Join thousands of IT professionals managing infrastructure with InfraLedger.</p>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <InputField id="name" name="name" placeholder="Enter your fullname" label="Full Name" formik={formik}/>
                    <InputField id="companyName" name="companyName" placeholder="Enter the company name" label="Company Name" formik={formik} />
                    <InputField id="email" name="email" placeholder="example@company.com" label="Email" formik={formik} />
                    <InputField id="password" name="password" placeholder="Enter Password" label="Password" formik={formik} />
                    <InputField id="confirmPassword" name="confirmPassword" placeholder="Enter Confirm Password" label="Confirm Password" formik={formik} />
                    <button className='bg-(--primary) text-(--static-text-light) rounded-[10px] py-[10px] cursor-pointer' type='submit'>Sign in</button>
                    <p className='text-(--text) text-center text-sm'>Already have an account? <Link to='/signin' className='text-(--primary) cursor-pointer font-medium'>Sign in</Link></p>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
