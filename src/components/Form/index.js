import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Form = ({children, onSubmit}) => (
  <FormWrapper noValidate onSubmit={onSubmit}>
    {children}
  </FormWrapper>
)

export default Form