import React from 'react'
import styled from 'styled-components'
import CachedIcon from '@material-ui/icons/Cached';

const Spinner = styled(CachedIcon)`
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`

const Spinning = ({ size }) => {
    return (
        <Spinner style={{fontSize: size}}/>
    )
}

export default Spinning