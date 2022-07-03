import React, { useContext } from 'react'
import { useInView } from 'react-intersection-observer'
import { Context } from '../../Context';

import {
    AlbumWrapper,
    Album
} from './styled'

const MusicPlayer = ({ album, music, nameMusic }) => {
    const { ref } = useInView({ rootMargin: '-49%' })
    const { dispatch } = useContext(Context)

    const haldleClick = () => {
        dispatch({
            type: 'secondNameMusic',
            payload: {
                nameMusic: nameMusic,
                musicPlaying: music
            },
        })
    }

    return (
        <AlbumWrapper ref={ref}>
            <Album
                src={album}
                alt="album" 
                onClick={haldleClick}
            />
        </AlbumWrapper>
    )
}

export default MusicPlayer
