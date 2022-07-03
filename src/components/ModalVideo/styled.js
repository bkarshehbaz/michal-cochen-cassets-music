import styled from "styled-components"
import ReactPlayer from 'react-player'

export const Wrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1050;
`

export const Modal = styled(ReactPlayer)`
    width: 80vw !important;
    height: 80vh !important;
    background: rgba(0,0,0,0.5);
`
