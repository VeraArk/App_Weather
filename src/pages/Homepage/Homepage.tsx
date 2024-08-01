import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"

import Button from "components/Button/Button"
import Input from "components/Input/Input"
import Card from "components/Card/Card"
import ErrorCard from "components/ErrorCard/ErrorCard"
import Modal from "components/Modal/Modal"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weatherSlice/weatherSlice"

import { WEATHER_FORM } from "./types"
import {
  HomepageWrapper,
  StyledFormContainer,
  ButtonControl,
  Spinner,
} from "./styles"

function Homepage() {
  const dispatch = useAppDispatch()
  const weather = useAppSelector(weatherSelectors.weatherData)
  const error = useAppSelector(weatherSelectors.error)
  const isFetching = useAppSelector(weatherSelectors.isFetching)

  const [isModalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState("")

  const validationSchema = Yup.object().shape({
    [WEATHER_FORM.CITY]: Yup.string(),
  })

  const formik = useFormik({
    initialValues: {
      [WEATHER_FORM.CITY]: "",
    },
    validationSchema: validationSchema,

    validateOnMount: false,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      if (!values[WEATHER_FORM.CITY]) {
        alert("Please enter a city!")
      } else {
        dispatch(
          weatherActions.getWeather({
            city: values[WEATHER_FORM.CITY],
          }),
        )
      }

      helpers.resetForm()
    },
  })

  const closeModal = () => {
    setModalVisible(false)
  }

  const onSave = () => {
    dispatch(weatherActions.saveCard())
    setModalText("The card saved")
    setModalVisible(true)
  }

  const onDelete = () => {
    dispatch(weatherActions.deleteCardHomePage())
  }

  const onDeleteError = () => {
    dispatch(weatherActions.deleteCardHomePage())
    setModalText("The card removed")
    setModalVisible(true)
  }
  return (
    <HomepageWrapper>
      {isFetching && <Spinner />}
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
          <Button name="Search" type="submit" isBlue disabled={isFetching} />
        </ButtonControl>
      </StyledFormContainer>
      {!!weather && (
        <Card
          onSave={onSave}
          onDelete={onDelete}
          showSaveButton={true}
          city={weather?.city}
          temperature={weather?.temperature}
          imgUrl={weather?.imgURL}
        />
      )}
      {error && <ErrorCard onDelete={onDeleteError} errorMessage={error} />}
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        text={modalText}
      ></Modal>
    </HomepageWrapper>
  )
}

export default Homepage
