import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'reflexbox'

const Wrapper = styled(Flex)`
  height: 98vh;
`

const LoginBox = styled(Box)`
  background-color: #F7FAFC;
  box-shadow: 5px 2px 15px #c4c4c4;
  border-radius: 15px;
  padding: 2rem;
`

const LoginWrapper = ({children, width}) => (
  <Wrapper width={[1]} justifyContent='center' alignItems='center'>
    <LoginBox width={width || [1, 1/2, 1/3, 1/3]}>
      <Box width={[1]} textAlign='center'>
        {children}
      </Box>
    </LoginBox>
  </Wrapper>
)

export default LoginWrapper