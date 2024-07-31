import { useAppDispatch, useAppSelector } from "store/hooks"

// import { EmployeeData } from "pages/EmployeeProjectApp/components/LayoutEmployee/types"
import { WEATHER_FORM } from "pages/Homepage/types"
import {
  PageWrapperWheather,
  WheatherCardContainer,
  ButtonControl,
} from "./styles"
import Button from "components/Button/Button"
// import {
//   employeeDataSliceAction,
//   employeeDataSliceSelectors,
// } from "store/redux/employeeData/employeeDataSlice"
import { ReactNode } from "react"
import { v4 } from "uuid"
import Card from "components/Card/Card"

function Weather() {
  const dispatch = useAppDispatch()

  // const dataFromCreateEmployee = useAppSelector(
  //   employeeDataSliceSelectors.employees,
  // )
  // const onResetEmployee = () => {
  // dispatch(employeeDataSliceAction.removeAllEmployees())
  // }

  // const employeesCards: ReactNode = dataFromCreateEmployee.map(
  //   (employeeObj: EmployeeData) => {
  //     const onDeletCard = () => {
  //       dispatch(
  //         employeeDataSliceAction.deleteEmployeeCard(
  //           employeeObj?.[EMPLOYEE_FORM_NAMES.ID],
  //         ),
  //       )
  //     }

  return (
    <PageWrapperWheather>
      <WheatherCardContainer>
      <Card showSaveButton={true} />
      </WheatherCardContainer>
      <ButtonControl>
        <Button
          name="Delete All Cards"
          type="button"
          onClick={() => {}}
          isBlue
        />
      </ButtonControl>
    </PageWrapperWheather>
  )
}

export default Weather
