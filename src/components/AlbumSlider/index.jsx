import React from 'react'
import StaticBlocks from '../StaticBlocks'
import Slider from 'react-slick'

import images from '../../utils/images/png/albumSlider'
import { 
  SliderPhoto,
  SliderWrapper,
  Wrapper,
  PhotoWrapper,
  TextFoundingFathersWrapper
} from './styled'

const AlbumSlider = () => {
  const settings = {
    infinite: true,
    speed: 8000,
    touchMove: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    rtl: true,
  }

  const slide = [
    images.slide_1,
    images.slide_2,
    images.slide_3,
    images.slide_4,
    images.slide_5,
    images.slide_6,
    images.slide_7,
    images.slide_8,
    images.slide_9,
    images.slide_10,
    images.slide_11,
    images.slide_12,
  ]

  const foundingFathers = {
    blockPhoto: (
      <SliderWrapper>
        <Slider {...settings}>
          {slide.map((item, index) => (
            <PhotoWrapper key={index}>
              <SliderPhoto src={item} />
            </PhotoWrapper>
          ))}
        </Slider>
      </SliderWrapper>
    ),
    year: '1957',
    title: 'חנות התקליטים של האחים אזולאי',
    underTitle: <TextFoundingFathersWrapper>
      החנות, שפועלת עד היום בכיכר השעון ביפו, נפתחה ב1957 ובתחילת דרכה שימשה בעיקר למכירת ציוד שמע. עם הזמן הבחינו האחים בביקוש למוזיקה שהכירו הלקוחות בארצות מוצאם ושהיתה אז 
      <br />
      מצרך נדיר. החברה שייסדו האחים(״זאקיפון״, ״רון-לי״ ולבסוף ״קוליפון״) היתה למעשה הלייבל העצמאי בראשון בארץ שהוקדש למוזיקה שמוצאה בארצות המזרח. החנות הפכה במרוצת הזמן למוסד אלטרנטיבי חתרני ששם לו למטרה לשמר ולהפיץ את האוצרות המוזיקליים של עדות המזרח, כמעין תגובת נגד להגמוניה של חברות התקליטים הממוסדות. עשרות מוזיקאים קיבלו במסגרת זו הזדמנות ראשונה שהזניקה את הקריירה שלהם, ביניהם ג׳ו עמר, אריס סאן, פלפל אל מסרי, ריימונד אבקסיס, אבנר גדסי ועוד רבים. 
    </TextFoundingFathersWrapper>
  }

  return (
    <Wrapper>
      <StaticBlocks {...foundingFathers} />
    </Wrapper>
  )
}

export default AlbumSlider
