import styled from "styled-components"

const LayaoutContainer = styled.div`
//max-width: 1500px;
margin: 2% 8% 0% 8%;
padding: 1%
overflow: hidden;
border-radius: 4px;
background-color: #F9F7F7;
min-height: calc(75vh - 5rem);
max-height: calc(75vh - 5rem);

@media only screen and (max-width: 680px) {
  .articulos-featured-title {
    margin-top: 20px;
    padding-bottom: 0.25rem;
    p {
      font-size: 1.25rem;
    }        
  }
}    
`

export {LayaoutContainer}