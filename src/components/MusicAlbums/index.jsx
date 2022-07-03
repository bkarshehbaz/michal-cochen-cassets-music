import React from 'react'
import { useInView } from "react-intersection-observer";

import MusicPlayer from './MusicPlayer';

import { ALBUMS } from './constants'

import {
    Wrapper
} from './styled'

const MusicAlbums = () => {
    const { ref, inView } = useInView({ threshold: 0 });

    return (
        <Wrapper 
            ref={ref} 
        >
            {ALBUMS.map((item) => (
                <MusicPlayer key={item.nameMusic} {...item} inView={inView} />
            ))}
        </Wrapper>
    )
}

export default MusicAlbums
