import { useState } from "react"
import { ReactNode } from "react"

import Button from "components/Button/Button"
import Modal from "components/Modal/Modal"
import Card from "components/Card/Card"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weatherSlice/weatherSlice"

import {
  PageWrapperWheather,
  WheatherCardContainer,
  ButtonControl,
} from "./styles"

function Weather() {
  const dispatch = useAppDispatch()

  const [isModalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState("")

  const closeModal = () => {
    setModalVisible(false)
  }

  const removeAll = () => {
    dispatch(weatherActions.deleteAllcards())
    setModalText("Data deleted successfully")
    setModalVisible(true)
  }

  const weatherCards = useAppSelector(weatherSelectors.allWeather)

  const savedCards: ReactNode = weatherCards.map(weatherCard => {
    const onDelete = () => {
      dispatch(weatherActions.deleteCardWeather(weatherCard?.id))
      setModalText("The Card removed")
      setModalVisible(true)
    }
    return (
      <Card
        onDelete={onDelete}
        showSaveButton={false}
        city={weatherCard?.city}
        temperature={weatherCard?.temperature}
        imgUrl={weatherCard?.imgURL}
      />
    )
  })

  return (
    <PageWrapperWheather>
      <WheatherCardContainer>{savedCards}</WheatherCardContainer>
      {weatherCards.length > 0 && (
        <ButtonControl>
          <Button
            name="Delete all cards"
            type="button"
            onClick={removeAll}
            isBlue
          />
        </ButtonControl>
      )}
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        text={modalText}
      ></Modal>
    </PageWrapperWheather>
  )
}

export default Weather
