import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import InputField from "./FormFields/InputField";
import SelectField from "./FormFields/SelectField";
import Button from "./Button";
import { useFormik } from "formik";
import * as yup from "yup"



function Modal({ isOpen, closeModal }) {
  
  const maxDate = new Date().toISOString().split("T")[0]

  const validationSchema = yup.object({
    assetName: yup
    .string()
    .required("asset name is required")
    .matches(/^[^\s]*[A-Za-z0-9\s]*[^\s]$/, "whitespace is not allowed"),
    category: yup
    .string()
    .required("category is required"),
    brand: yup
    .string()
    .required("brand is required")
    .matches(/^[^\s]*[A-Za-z0-9\s]*[^\s]$/, "whitespace is not allowed"),
    model: yup
    .string()
    .required("model is required")
    .matches(/^[^\s]*[A-Za-z0-9\s]*[^\s]$/, "whitespace is not allowed"),
    serialNumber: yup
    .string().
    required("serial number is required")
    .matches(/^[^\s]*[A-Za-z0-9\s]*[^\s]$/, "whitespace is not allowed"),
    purchaseDate: yup
    .string()
    .required("purchase date is required")
    .matches(/^[^\s]*[A-Za-z0-9\s]*[^\s]$/, "whitespace is not allowed"),
    status: yup
    .string()
    .required("status is required")
  })
  const formik = useFormik({
    initialValues: {
      assetName: "",
      category: "",
      brand: "",
      model: "",
      serialNumber: "",
      purchaseDate: "",
      status: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => console.log(values)
  })

  return (
  <AnimatePresence>
    // Modal Backdrop
    { isOpen && (
      <motion.div  initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}} transition={2} className="absolute h-[100vh] w-[100vw] left-0 top-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[2px] flex justify-center items-center z-10">
        {/* Modal */}
        <motion.div initial={{scale: 0.7}} animate={{scale: 1}} exit={{scale: 0.7}} transition={2} className="w-[450px] bg-white rounded-[20px] p-[30px] pt-[40px] relative z-20">
          <div className="absolute right-[15px] top-[15px] p-[6px] rounded-[50%] hover:bg-(--primary) hover:text-white transition-colors duration-300 cursor-pointer" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56" ><path fill="currentColor" d="M13.012 40.012c-.797.797-.82 2.156 0 2.976c.797.82 2.156.797 2.976 0l12-12.023l12.024 12.023c.797.797 2.156.82 2.953 0c.844-.82.82-2.18 0-2.976l-12-12.024l12-12c.82-.797.844-2.18 0-2.976c-.797-.82-2.156-.797-2.953 0L27.988 25.035l-12-12.023c-.82-.797-2.18-.82-2.976 0c-.82.797-.797 2.18 0 2.976l12 12Z"/></svg>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-[15px] max-h-[700px] overflow-y-auto [&::-webkit-scrollbar]:hidden">
              <h1 className="text-center text-[18px] font-medium">Create New Asset</h1>
              <InputField name="assetName" id="assetName" label="Asset Name" placeholder="Enter Asset Name" formik={formik}/>
              <SelectField name="category" id="category" label="Select Category" options={["Laptop", "Server", "Monitor", "Router"]} formik={formik}/>
              <InputField name="brand" id="brand" label="Brand" placeholder="Enter brand name" formik={formik}/>
              <InputField name="model" id="model" label="Model Name" placeholder="Enter model name" formik={formik}/>
              <InputField name="serialNumber" id="serialNumber" label="Serial Number" placeholder="Enter serial number" formik={formik}/>
              <InputField name="purchaseDate" id="purchaseDate" label="Purchase Date" type="date" max={maxDate} formik={formik}/>
              <SelectField name="status" id="status" label="Select Status" options={["Available", "In Use", "Repair"]} formik={formik}/>
              <Button type="submit" value="Create"/>
            </form>
          </div>
        </motion.div>
      </motion.div>
    )}
    </AnimatePresence>
  );
}

export default Modal;
