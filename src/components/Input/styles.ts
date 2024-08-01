import styled from "@emotion/styled"

interface StyledInputProps {
  $error: string | undefined
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledInput = styled.input<StyledInputProps>`
  width: 550px;
  height: 480px;
  border: 1px solid #ffffff;
  border-radius: 40px;
  padding: 12px 12px 12px 20px;
  outline: none;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0);

  &::placeholder {
    color: #ffffff;
    font-size: 16px;
  }
`

export const ErrorContainer = styled.div`
  color: red;
  font-size: 18px;
`
