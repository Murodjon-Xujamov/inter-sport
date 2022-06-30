import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Title from '../layout/component/Title';
import NewsCart from '../layout/component/NewsCart';
import '../assets/scss/_about.scss';
import AboutAside from '../layout/component/AboutAside';

const Media = () => {
  return (
    <Container style={{padding: '3rem 15px', position: 'relative',}}>
        <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
                <Title name='Biz haqimizda' mb='28' />
                <AboutAside />
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