import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Title from '../layout/component/Title';
import NewsCart from '../layout/component/NewsCart';
import '../assets/scss/_goal.scss';
import team1 from '../assets/images/futbol-min.JPG';
import team2 from "../assets/images/futbol2-min.JPG";

const Media = () => {
  return (
    <Container style={{ padding: "3rem 15px", position: "relative" }}>
      <Grid
        container
        spacing={{
          md: 4,
        }}
      >
        <Grid item xs={12} md={8}>
          <Title name="Maqsadlar" mb="28" />
          <div className="goal-box">
            <img src={team1} alt="not found" />
            <div className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="goal-box">
            <img src={team2} alt="not found" />
            <div className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Title name="Yangiliklar" mb="28" />
          <NewsCart span={false} mt="12" />
          <NewsCart span={false} mt="12" />
          <NewsCart span={false} mt="12" />
          <NewsCart span={false} mt="12" />
          <NewsCart span={false} mt="12" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Media;