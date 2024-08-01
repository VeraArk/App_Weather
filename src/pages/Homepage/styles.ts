import styled from "@emotion/styled"

import backgroundImage from "assets/backgroundImage.jpg"

export const HomepageWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 100px;
  align-items: center;
`

export const StyledFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 710px;
  height: 48px;
  margin-top: 120px;
  left: 605px;
  gap: 14px;
`
export const ButtonControl = styled.div`
  width: 155px;
`
export const Spinner = styled.div`

  border: 8px solid rgba(56, 24, 217, 0.1);

  border-left-color: #22c1c3;
  border-right-color: #22c1c3;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 2s alternate infinite;
  position: absolute;
  top: 42%;
  left: 50%;
  opacity: 70%;



  
  @keyframes spin {
    to {
      transform: rotate(180deg);
    }
  }
`;

// export const Spinner = styled.div`

//   border: 8px solid rgba(56, 24, 217, 0.1);
//   border-left-color: red;
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   animation: spin 4s linear infinite;
//   position: absolute;
//   top: 30%;
//   left: 50%;
  
  
//   @keyframes spin {
//     to {
//       transform: rotate(180deg)
//     }
//   }
// `;