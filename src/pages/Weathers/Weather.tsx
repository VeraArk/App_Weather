import { useAppDispatch, useAppSelector } from "store/hooks"
import { useState } from "react"

import { WEATHER_FORM } from "pages/Homepage/types"
import {
  PageWrapperWheather,
  WheatherCardContainer,
  ButtonControl,
} from "./styles"
import Button from "components/Button/Button"
import Modal from "components/Modal/Modal"

import { ReactNode } from "react"
import { v4 } from "uuid"
import Card from "components/Card/Card"
import { useSelector } from "react-redux"
import { weatherActions, weatherSelectors } from "store/redux/weatherSlice/weatherSlice"

function Weather() {
  const dispatch = useAppDispatch()

  const [isModalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState("")

  const closeModal = () => {
    setModalVisible(false)
  }

  const removeAll = () => {
    dispatch(weatherActions.deleteAllcards())
    setModalText("The Cards deleted")
    setModalVisible(true)
  }

const weatherCards = useAppSelector(weatherSelectors.allWeather)

const savedCards:ReactNode = weatherCards.map ((weatherCard)=>{
  const onDelete = () => {
    dispatch(weatherActions.deleteCardWeather(weatherCard?.id))
    setModalText("The Card deleted")
    setModalVisible(true)
  }
  return (
  <Card onDelete={onDelete} showSaveButton={false} city={weatherCard?.city} temperature={weatherCard?.temperature} imgUrl={weatherCard?.imgURL}/>)
})




  return (
    <PageWrapperWheather>
      <WheatherCardContainer>
      {savedCards}
      </WheatherCardContainer>
      {weatherCards.length>0 && <ButtonControl>
        <Button
          name="Delete All Cards"
          type="button"
          onClick={removeAll}
          isBlue
        />
      </ButtonControl>}
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        text={modalText}
      ></Modal>
    </PageWrapperWheather>
  )
}

export default Weather
