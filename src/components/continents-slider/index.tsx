import { Box, theme } from '@chakra-ui/react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ContinentSlide } from './continent-slide'
import { ContinentSlideProps } from './types'

interface ContinentsSliderProps {
  continents: ContinentSlideProps[];
}

export default function ContinentsSlider({ continents = [] }: ContinentsSliderProps) {
  return (
    <Box
      as={Swiper}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay:4000,
      }}
      __css={{
        '--swiper-theme-color': theme.colors.yellow[400],
      }}
      w='100%'
      h={['250px', '450px']}
      maxW={1160}
      mx='auto'
      my='10'
    >
      {continents.map((continent) => (
        <SwiperSlide key={continent.slug}>
          <ContinentSlide {...continent} />
        </SwiperSlide>
      ))}
    </Box>
  );
}
