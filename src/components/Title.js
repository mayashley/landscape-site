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
    color:var(--darkGrey);
    margin:2rem;
}
.title{
    color: rgba(0, 0, 0, 0.76);
}
.subtitle{
  color: var(--primaryColor);
}
span{
    display: block;
}
@media (min-width: 576px){
    span{
        display: inline-block;
        margin: 0 0.16rem;
    }
}
`
export default Title
