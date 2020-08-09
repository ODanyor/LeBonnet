import styled from 'styled-components'

export const Button = styled.button`
  ${(props) =>
    props.block
      ? 'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;'
      : null}

  cursor: pointer;
  border: none;
  background: none;
`
