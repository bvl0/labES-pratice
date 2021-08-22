import styled from 'styled-components'

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 50px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
  }
`
export default Container
