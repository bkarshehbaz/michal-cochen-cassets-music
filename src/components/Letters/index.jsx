import React from 'react'
import { useParallax } from 'react-scroll-parallax'

import lettersHPhoto from '../../utils/images/png/letters/letters_h.png'
import lettersEPhoto from '../../utils/images/png/letters/letters_e.png'
import maskGroupBg from '../../utils/images/png/letters/mask_group.png'
import bird1Photo from '../../utils/images/png/letters/bird1.png'
import bird2Photo from '../../utils/images/png/letters/bird2.png'
import bird3Photo from '../../utils/images/png/letters/bird3.png'

import { 
    Wrapper,
    LettersH,
    LettersE,
    MaskGroup,
    Bird1,
    Bird2,
    Bird3,
} from './styled'

const Letters = () => {
    const background1_paralax = useParallax({ speed: -10 })

    const bird1_paralax = useParallax({ 
        translateX: [0, 90],
        translateY: [0, -50],
    });
    
    const bird2_paralax = useParallax({ 
        translateX: [0, 60],
        translateY: [0, -150],
    });
    
    const bird3_paralax = useParallax({ 
        translateX: [0, 40],
        translateY: [0, -120],
    });

    return (
        <Wrapper>
            <LettersH
                src={lettersHPhoto}
                alt="letters"
            />
            <LettersE
                src={lettersEPhoto}
                alt="letters"
            />
            <MaskGroup 
                ref={background1_paralax.ref} 
                src={maskGroupBg} 
            />
            <Bird1
                ref={bird1_paralax.ref} 
                src={bird1Photo}
            />
            <Bird2
                ref={bird2_paralax.ref} 
                src={bird2Photo}
            />
            <Bird3
                ref={bird3_paralax.ref} 
                src={bird3Photo}
            />
        </Wrapper>
    )
}

export default Letters
