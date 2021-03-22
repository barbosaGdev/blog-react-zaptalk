import React from 'react'
import avatar from '../../assets/avatar.png'




export default () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
            <div>
                <img src={avatar} alt="teste" width={100} />
            </div>

            <div>
                <h4>Usuário</h4>
                <h6>Email</h6>
            </div>
        </div>
    )
}