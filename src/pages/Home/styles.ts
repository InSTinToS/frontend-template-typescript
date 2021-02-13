import styled from 'styled-components'

const Style = styled.main`
  color: ${({ theme }) => theme.colors.primary};
`

export default Style

Style.displayName = 'Home-Style'
