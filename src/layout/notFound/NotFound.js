import React from "react";
import "../../assets/scss/_not_found.scss";
import notimage from "../../assets/images/error-6482984_960_720.png";
import { Container } from "@mui/material";

const NotFound = () => {
  return (
    <Container>
      <div className="not__found__page">
        <h4>Saytga texnik ishlar olib borilmoqda</h4>
        <div className="not__found__page__image__ramci">
          <img src={notimage} alt="Not Fount" />
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
