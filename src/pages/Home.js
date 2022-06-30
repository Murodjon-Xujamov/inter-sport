import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import NewsCart from '../layout/component/NewsCart';
import '../assets/scss/_home.scss';
import Title from '../layout/component/Title';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-tabs/style/react-tabs.css';
import "swiper/css";
import "swiper/css/pagination";
import AboutAside from '../layout/component/AboutAside';

const Home = () => {
  return (
    <Container style={{position: 'relative'}}>
      <Grid container gap={1} style={{ minHeight: '300px', padding: '3rem 0'}}>
        <Grid item md={6}>
          <Link className='main__news-link' to=''>
            <span>Без рубрики</span>
            <img style={{width: '100%', height: '100%'}} src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_14-56-30-750x406.jpg' alt='not found' />
            <div className='news__text'>🚂 «Локомотив» в контрольном матче обыграл «Машал»</div>
          </Link>
        </Grid>
        <Grid container spacing={1} md={6}>
          <Grid item sm={6}>
            <Link className='main__news-link' to=''>
              <span>Без рубрики</span>
              <img style={{width: '100%', height: '100%'}} src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              <div className='news__text'>Сервер Джепаров вернулся в «Локомотив»🚂</div>
            </Link>
          </Grid>
          <Grid item sm={6}>
            <Link className='main__news-link' to=''>
              <span>Без рубрики</span>
              <img style={{width: '100%', height: '100%'}} src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              <div className='news__text'>Футзал. Наша команда завершила свои матчи 8 тура</div>
            </Link>
          </Grid>
          <Grid item sm={6}>
            <Link className='main__news-link' to=''>
              <span>Футзал</span>
              <img style={{width: '100%', height: '100%'}} src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              <div className='news__text'>Боевая ничья в товарищеском матче с Кокандом-1912</div>
            </Link>
          </Grid>
          <Grid item sm={6}>
            <Link className='main__news-link' to=''>
              <span>Футзал</span>
              <img style={{width: '100%', height: '100%'}} src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              <div className='news__text'>Футзал. Нашу команду ожидают серьезные матчи. Календарь 8 тура</div>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={4} style={{padding: '3rem 0'}}>
        <Grid item md={8}>
          <Title name='Новости' mb='28' />
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <NewsCart span={true} />
            </Grid>
            <Grid item sm={6}>
              <NewsCart span={true} />
            </Grid>
            <Grid item sm={6}>
              <NewsCart span={true} />
            </Grid>
            <Grid item sm={6}>
              <NewsCart span={true} />
            </Grid>
            <Grid item sm={6}>
              <NewsCart span={true} />
            </Grid>
            <Grid item sm={6}>
              <NewsCart span={true} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Swiper
              style={{maxHeight: '300px', marginTop: '1.5rem'}}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              autoplay={{
                  delay: 100,
                  disableOnInteraction: false
              }}
              speed={500}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                769: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                }
              }}
              className="mySwiper1"
            >
              <SwiperSlide>
                <img src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt='not found' />
              </SwiperSlide>
            </Swiper>
          </Grid>
        <Grid item xs={12}>
          <Title name='Loko shop' />
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              767: {
                slidesPerView: 4,
              },
              0: {
                slidesPerView: 1,
              }
            }}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='http://lokomotiv.uz/wp-content/uploads/shop/item1.jpg' alt='not found' />
            </SwiperSlide>
          </Swiper>
        </Grid>
        </Grid>
        <Grid item md={4}>
          <Title name='Anons' mb='28' />
          <AboutAside />
          <div style={{textAlign: 'right', marginTop: '12px'}}><Link to=''>Смотреть все</Link></div>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Home;