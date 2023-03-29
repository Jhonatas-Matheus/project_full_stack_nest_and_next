import styled from "styled-components";





export const StyledControlPanel = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  @media (min-width: 768px){
    width: 50%;
  }
  @media (min-width: 1024px){
    width: 30%;
  }
  input {
      background-color: rgba(5, 5, 5, 0.14);
    border: none;
    padding: 1rem;
    border-radius: 4px;
    &:focus {
        outline: none;
    }
}
input[type="submit"]{
    background-color: #1DBBED !important;
    height: 100%;
    color: #fff;
    font-weight: bold;
}
input[type="button"]{
    margin-top: .5rem;
    background-color: #1DBBED !important;
    height: 100%;
    color: #fff;
    font-weight: bold;
}
.search-params{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: .5rem;
    input{
        width: 60%;
    }
    input[type="submit"]{
        width: 40%;
    }
}
.params-selector{
    display: flex;
    margin-top: .5rem;
    justify-content: center;
    gap: 1rem;
}
`