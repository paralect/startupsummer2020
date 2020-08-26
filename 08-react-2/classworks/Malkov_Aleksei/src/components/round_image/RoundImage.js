import styled from "styled-components";


const RoundImage = styled.img.attrs(
  props => ({
    'src': props.src,
    'alt': props.alt,
  }))`
  width: 80px;
  height: 80px;
  margin: 0 20px;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
`;

export default RoundImage;
