import React from "react"
import styled from 'styled-components'

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}


const TitleWrapper = styled.div`
text-transform: capitalize ;
font-size: 2.2rem;
margin-bottom: 2rem;
h4 {
    text-align: center;
    letter-spacing: 4px;
    color: var(--primaryColor);
    margin:1rem;
}
.title{
    color: var(--darkGrey);
}
span{
    display: block;
}
@media (min-width: 576px){
    span{
        display: inline-block;
        margin: 0 0.35rem;
    }
}
`
export default Title
