import { useAppDispatch, useAppSelector } from "store/hooks"


// import { EmployeeData } from "pages/EmployeeProjectApp/components/LayoutEmployee/types"
import { WEATHER_FORM } from "pages/Homepage/types"
import {
  PageWrapperWheather,
  WheatherCardContainer,
  DataContainer,
  Title,
  Field,
  ButtonControl,
  CardsContainer,
} from "./styles"
import Button from "components/Button/Button"
import {
  employeeDataSliceAction,
  employeeDataSliceSelectors,
} from "store/redux/employeeData/employeeDataSlice"
import { ReactNode } from "react"
import { v4 } from "uuid"

function Employees() {
  const dispatch = useAppDispatch()

  const dataFromCreateEmployee = useAppSelector(
    employeeDataSliceSelectors.employees,
  )
  const onResetEmployee = () => {
  dispatch(employeeDataSliceAction.removeAllEmployees())
  }
  
  const employeesCards: ReactNode = dataFromCreateEmployee.map(
    (employeeObj: EmployeeData) => {
      const onDeletCard = () => {
        dispatch(
          employeeDataSliceAction.deleteEmployeeCard(
            employeeObj?.[EMPLOYEE_FORM_NAMES.ID],
          ),
        )
      }

      return (
        <EmployeeCard key={v4()}>
          <DataContainer>
            <Title>Name</Title>
            <Field>{employeeObj?.[EMPLOYEE_FORM_NAMES.NAME]}</Field>
          </DataContainer>
          <DataContainer>
            <Title>Surname</Title>
            <Field>{employeeObj?.[EMPLOYEE_FORM_NAMES.SURNAME]}</Field>
          </DataContainer>
          <DataContainer>
            <Title>Age</Title>
            <Field>{employeeObj?.[EMPLOYEE_FORM_NAMES.AGE]}</Field>
          </DataContainer>
          <DataContainer>
            <Title>Job Position</Title>
            <Field>{employeeObj?.[EMPLOYEE_FORM_NAMES.JOB_POSITION]}</Field>
          </DataContainer>

          <Button
            name="Delete"
            type="button"
            onClick={onDeletCard}
            isRed={true}
          />
        </EmployeeCard>
      )
    },
  )

  console.log(employeesCards)

  return (
    <PageWrapperWheather>
      <WheatherCardContainer>
        {/* {dataFromCreateEmployee.length > 0 && <>{employeesCards}</>} */}
      </WheatherCardContainer>

      <ButtonControl>
        {dataFromCreateEmployee.length > 0 && (
          <Button
            name="Remove All Employee"
            type="button"
            onClick={onResetEmployee}
            isRed={true}
          />
        )}
      </ButtonControl>


  
    </PageWrapperWheather>
  )
}

export default Employees