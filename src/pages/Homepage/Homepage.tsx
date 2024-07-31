import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "components/Button/Button"
import Input from "components/Input/Input"

import { WEATHER_FORM } from "./types"
import { HomepageWrapper, StyledFormContainer, ButtonControl } from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
// import {
//   employeeDataSliceAction,
//   employeeDataSliceSelectors,
// } from "store/redux/employeeData/employeeDataSlice"
import { v4 } from "uuid"

function Homepage() {
  //   const validationSchema = Yup.object().shape({
  //     [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
  //       .required("This field is required")
  //       .min(2, "Name field must contain minimum 2 characters")
  //       .max(50, "Name field must contain maximum 50 characters"),
  //     [EMPLOYEE_FORM_NAMES.SURNAME]: Yup.string()
  //       .required("This field is required")
  //       .max(15, "Surname field must contain maximum 15 characters"),
  //     [EMPLOYEE_FORM_NAMES.AGE]: Yup.string()
  //       .required("This field is required")
  //       .min(1, "Age field must contain minimum 1 characters")
  //       .max(3, "Age field must contain maximum 3 characters"),
  //     [EMPLOYEE_FORM_NAMES.JOB_POSITION]: Yup.string().max(
  //       30,
  //       "Job Position field must contain maximum 30 characters",
  //     ),
  //   })
  //   const employee = useAppSelector(employeeDataSliceSelectors.employees)
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      [WEATHER_FORM.ID]: "",
      [WEATHER_FORM.CITY]: "",
    },
    // validationSchema: validationSchema,

    validateOnMount: false,

    validateOnChange: true,
    onSubmit: (values, helpers) => {
      //   dispatch(
      //     employeeDataSliceAction.createEmployeeCard({
      //       ...values,
      //       [WEATHER_FORM.ID]: v4(),
      //     }),
      //   ),
      //     helpers.resetForm()
    },
  })

  return (
    <HomepageWrapper>
      <StyledFormContainer onSubmit={formik.handleSubmit}>
        <Input
          id="name-id"
          name={WEATHER_FORM.CITY}
          type="text"
          // placeholder="John"
          value={formik.values[WEATHER_FORM.CITY]}
          onChange={formik.handleChange}
          error={formik.errors[WEATHER_FORM.CITY]}
        />
        <ButtonControl>
          <Button name="Search" type="submit" />
        </ButtonControl>
      </StyledFormContainer>
      {/* <Card/> */}
    </HomepageWrapper>
  )
}

export default Homepage;
