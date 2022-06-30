import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Title from '../layout/component/Title';
import NewsCart from '../layout/component/NewsCart';
import '../assets/scss/_team.scss';

const Media = () => {
  return (
    <Container style={{padding: '3rem 15px', position: 'relative'}}>
        <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Title name='Jamoa' mb='28' />
              <div className='team-cart'>
                <div className='cart-image'>
                  <img src='	http://lokomotiv.uz/wp-content/uploads/directors/zokir-seidullayev.jpg' alt='not found' />
                </div>
                <div className='cart-action'>
                  <div className='cart__name'>СЕЙДУЛЛАЕВ ЗОКИР ИКРАМОВИЧ</div>
                  <span>и.о. генерального директора</span>
                </div>
              </div>
              <div className='team-cart'>
                <div className='cart-image'>
                  <img src='	http://lokomotiv.uz/wp-content/uploads/directors/zokir-seidullayev.jpg' alt='not found' />
                </div>
                <div className='cart-action'>
                  <div className='cart__name'>СЕЙДУЛЛАЕВ ЗОКИР ИКРАМОВИЧ</div>
                  <span>и.о. генерального директора</span>
                </div>
              </div>
              <div className='team-cart'>
                <div className='cart-image'>
                  <img src='	http://lokomotiv.uz/wp-content/uploads/directors/zokir-seidullayev.jpg' alt='not found' />
                </div>
                <div className='cart-action'>
                  <div className='cart__name'>СЕЙДУЛЛАЕВ ЗОКИР ИКРАМОВИЧ</div>
                  <span>и.о. генерального директора</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <Title name='Yangiliklar' mb='28' />
                <NewsCart span={false} mt='12' />
                <NewsCart span={false} mt='12' />
                <NewsCart span={false} mt='12' />
                <NewsCart span={false} mt='12' />
                <NewsCart span={false} mt='12' />
            </Grid>
        </Grid>
    </Container>
  )
}

export default Media;