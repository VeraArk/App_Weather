import styled from "@emotion/styled";


export const StyledButton = styled.button`
width: Fixed (155px)px;
height: Hug (48px)px;
top: 512px;
left: 1007px;
padding: 12px 40px;
gap: 10px;
border-radius: 50px;
border: 1px;
opacity: 0px;
color: #FFFFFF;
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 24.2px;
text-align: left;
cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
