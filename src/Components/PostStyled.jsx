import styled from "styled-components";



export const Show = styled.div`
  width: 100%;
  background: aquamarine;

  display: grid;

  justify-content: center;
  grid-template-rows: repeat(4 , 30vw) ;
  grid-template-columns: repeat(3 , 20vw);
  grid-gap: 1vw;

`

export const Item = styled.div`

  width: 100%;
  background: #c597f1;
  
  img
  {
    width: 100%;
    height: 17vw;
    
  }
`