// @flow strict
import React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E, { type E2ePropType } from '../../Tools/injectE2E'
import type { PropsType, HtmlInputType } from './Input'

const toId = (value) => `${value}-radio`

const Wrapper = styled.div`
  display: flex;
`

type InputPropsType = { +name?: string, +type: HtmlInputType } & E2ePropType

const RadioButton = styled.span`
  margin-right: 0.5rem;
  background: ${({ theme }) => theme.palette.white};
  border: 2px solid ${(props) => props.theme.inputBorderColor};
  box-sizing: border-box;
  border-radius: 50%;
  height: 16px;
  width: 16px;
`

const Input: ReactComponentFunctional<InputPropsType> = styled.input.attrs({
  'data-e2e': injectE2E,
  id: (props) => toId(props.value),
  name: (props) => props.name,
  type: 'radio',
})`
  position: absolute;
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  visibility: visible;
  white-space: nowrap;
  width: 1px;

  &:checked ~ label ${RadioButton} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: ${(props) => props.theme.inputCheckedColor};

    &::before {
      border-radius: 51%;
      content: '';
      display: inline-block;
      height: 8px;
      width: 8px;
      position: relative;
      background: ${(props) => props.theme.inputCheckedColor};
    }
  }
`

export const RadioLabel: ReactComponentFunctional<{
  +name?: string,
}> = styled.label.attrs({
  htmlFor: (props) => toId(props.value),
})`
  position: relative;
  left: 1px;
  display: flex;
  align-items: center;
  min-height: 1rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 1rem;
`

const Radio = ({ input, ...rest }: PropsType) => (
  <Wrapper>
    <Input {...input} {...rest} />
    <RadioLabel name={rest.name} value={rest.value}>
      <RadioButton />
      {rest.label}
    </RadioLabel>
  </Wrapper>
)

export default Radio
