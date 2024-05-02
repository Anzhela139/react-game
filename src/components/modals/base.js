import React from 'react'
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';
import { useSelector } from 'react-redux'

const modalStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
}

function Base({ content, handleClose, handleback  }) {
    const menu = useSelector(state => state.menu)
    return (
        <div className="wrapper-menu" style={modalStyles}>
            <div className="screen">
                <div className='modal-header'>
                    <Icon path={mdiArrowLeft} size={1} onClick={handleback} />
                    <h4 className='modal-title'>{ menu.value }</h4>
                    <Icon path={mdiWindowClose} size={1} onClick={handleClose} />
                </div>

                { content  }
            </div>
            <div className="fade" onClick={handleClose}></div>
        </div>
    )
}

export default Base