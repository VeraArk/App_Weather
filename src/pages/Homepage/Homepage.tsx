import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "components/Button/Button"
import Input from "components/Input/Input"
import Card from "components/Card/Card"


import { WEATHER_FORM } from "./types"
import { HomepageWrapper, StyledFormContainer, ButtonControl } from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weatherSlice/weatherSlice"
import { v4 } from "uuid"

function Homepage() {
  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    [WEATHER_FORM.CITY]: Yup.string().required("This field is required"),
  })

  const formik = useFormik({
    initialValues: {
      // [WEATHER_FORM.ID]: "",
      [WEATHER_FORM.CITY]: "",
    },
    validationSchema: validationSchema,

    validateOnMount: false,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      dispatch(
        weatherActions.getWeather({
          city: values[WEATHER_FORM.CITY],
          // [WEATHER_FORM.ID]: v4(),
        }),
      ),
        helpers.resetForm()
    },
  })

  const weather = useAppSelector(weatherSelectors.WeatherData)
  const error = useAppSelector(weatherSelectors.error)


  return (
    <HomepageWrapper>
      <StyledFormContainer onSubmit={formik.handleSubmit}>
        <Input
          id="name-id"
          name={WEATHER_FORM.CITY}
          type="text"
          placeholder="Colorado"
          value={formik.values[WEATHER_FORM.CITY]}
          onChange={formik.handleChange}
          error={formik.errors[WEATHER_FORM.CITY]}
        />
        <ButtonControl>
          <Button name="Search" type="submit" isBlue />
        </ButtonControl>
      </StyledFormContainer>
      {!!weather && <Card showSaveButton={true} city={weather?.city} temperature={weather?.temperature} imgUrl={weather?.imgURL}/>}
      {error && <Card showSaveButton={false} city={weather?.city} temperature={weather?.temperature} imgUrl={weather?.imgURL}/>}
    </HomepageWrapper>
  )
}

export default Homepage
