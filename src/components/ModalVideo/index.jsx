import React, { useEffect } from 'react'

import {
    Wrapper,
    Modal
} from './styled'

const ModalVideo = ({ isOpen, src, closeModal }) => {
    return (
        <>
            {isOpen &&
                <Wrapper onClick={closeModal}>
                    <Modal
                        onClick={(e) => e.stopPropagation()}
                        url={src}
                        playing={true}
                        config={{ 
                            youtube: { 
                              playerVars: {  showinfo: 1  },
                            }
                        }}
                    />
                </Wrapper>
            }
        </>
    )
}

export default ModalVideo
