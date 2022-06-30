import React from 'react';
import '../../assets/scss/_footer.scss';
import { FaTelegram, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Grid, Link } from '@mui/material';
import { Container } from '@mui/system';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} style={{borderRight: '1px solid #f6f6f6'}}>
            <div className='footer__title'>Haqimizda</div>
            <div className='footer__link'><Link to=''>Bosh sahifa</Link></div>
            <div className='footer__link'><Link to=''>Biz haqimizda</Link></div>
            <div className='footer__link'><Link to=''>Yangiliklar</Link></div>
          </Grid>
          <Grid item xs={12} sm={4} style={{borderRight: '1px solid #f6f6f6'}}>
            <div className='footer__title'>Jamoa</div>
            <div className='footer__link'><Link to=''>Maqsadlar</Link></div>
            <div className='footer__link'><Link to=''>Vazifalar</Link></div>
            <div className='footer__link'><Link to=''>Tadbirlar</Link></div>
          </Grid>
          <Grid item xs={12} sm={4} style={{borderRight: '1px solid #f6f6f6'}}>
            <div className='footer__title'>Kontaktlar</div>
            <div className='footer__icons'>
              <div><Link to=''><FaTelegram size={18} /></Link></div>
              <div><Link to=''><AiFillInstagram size={18} /></Link></div>
              <div><Link to=''><FaFacebook size={18} /></Link></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer;