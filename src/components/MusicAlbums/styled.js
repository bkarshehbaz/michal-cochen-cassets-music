import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 200px 0 350px;
`

export const AlbumWrapper = styled.div`
  width: 230px;
  height: 344px;
  margin: 10px;
  cursor: pointer;
`

export const Album = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: rotate(-10deg);
  }
`
