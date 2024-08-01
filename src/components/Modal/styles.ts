import styled from "@emotion/styled"

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
`
export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  margin-top: -400px;
  border-radius: 5px;
`
export const StyledText = styled.p`
  padding: 10px;
  font-size: 24px;
  text-align: center;
  white-space: nowrap;
`
