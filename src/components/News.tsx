import { HeadingBar } from "./HeadingBar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Keyboard, Pagination } from "swiper";
import { Image, Link } from "@chakra-ui/react";
import { Headline } from "./Headline";
export function News() {
  return(
    
    <>
    <HeadingBar title="NOTÍCIAS"/>
      <Swiper
        slidesPerView={4}
        spaceBetween= {5}
        navigation={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Pagination]}
      >
        <SwiperSlide>
          <Headline 
            image="home/News/nn.png"
            description="O PETiano Matheus realiza uma apresentação sobre Redes Neurais."
            link="https://www.youtube.com/watch?v=ImKCyBeUeEo"
            linkDescription="Link para o seminário"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Headline 
            image="home/News/bordeaux.png"
            description="Palestra com Professor François Rivet, da Bordeaux INP."
            link="https://www.youtube.com/watch?v=_HR2T1NPuvA"
            linkDescription="Link para a palestra"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}