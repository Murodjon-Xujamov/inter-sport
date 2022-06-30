import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Title from '../layout/component/Title';
import NewsCart from '../layout/component/NewsCart';
import '../assets/scss/_media.scss';

const Media = () => {
  return (
    <Container style={{padding: '3rem 15px', position: 'relative'}}>
        <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
                <Title name='Media' mb='28' />
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