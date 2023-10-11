import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.h1<Props>`
  color: var(--cor-principal);
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '32px')};
  font-weight: bold;
`
