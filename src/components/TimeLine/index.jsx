import React, { useState } from 'react'
import { yearsData } from './mockData'
import TimeLineItem from './TimeLineItem'

import {
  StyledWrapper,
  StyledLine
} from './styled'


const TimeLine = () => {
  const [whatYearNow, setWhatYearNow] = useState('1950')

  return (
    <StyledWrapper>
      <StyledLine />
      {yearsData.map((item) => 
        <TimeLineItem 
          whatYearNow={whatYearNow}
          setWhatYearNow={setWhatYearNow}
          key={item.keyName}
          { ...item }
        />)
      }
    </StyledWrapper>
  )
}

export default TimeLine
