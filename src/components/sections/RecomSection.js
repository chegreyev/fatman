import React from 'react'
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectCoverflow} from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';

import Review1 from '../../assets/images/review-1.jpg'
import Review2 from '../../assets/images/review-2.png'
import Review3 from '../../assets/images/review-3.jpg'

SwiperCore.use([EffectCoverflow])

export default () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="container">

            <div className="center-content section-header" >
                <div className="container-xs">
                    <h2 className="mt-0 mb-0">
                        {t('recommendationSectionTitle')}
                    </h2>
                </div>
            </div>

            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                effect="coverflow"
                loop={true}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={Review1} alt="Review1" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Review2} alt="Review2" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Review3} alt="Review3" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};