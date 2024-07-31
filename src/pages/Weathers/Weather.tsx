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
import { useSelector } from "react-redux"

function Weather() {
  const dispatch = useAppDispatch()




  return (
    <PageWrapperWheather>
      <WheatherCardContainer>
      
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
