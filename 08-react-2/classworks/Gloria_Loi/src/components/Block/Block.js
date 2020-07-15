import React from "react";


import styled from "styled-components";
import styles from "./Block.module.css";

const StyledBlock = styled.div`
width: 100%;
height: 85px;
`

const Block = () => (
<div> 
  <div className={styles.block}/>
  <StyledBlock/>
</div>

);

export default Block;
