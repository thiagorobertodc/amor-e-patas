import React from "react";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import vetImage from "../../assets/images/vet.png";
import "./style.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="content">
        <div className="left-section">
          <img src={vetImage} alt="Veterinária" className="vet-image" />
        </div>
        <div className="right-section">
          <p>
            Você pode me contatar ou agendar sua consulta pelo meu WhatsApp, e
            acompanhar meus últimos posts no Instagram. Continue acompanhando me
            seguindo por lá!
          </p>
          <div className="buttons-container">
            <Button
              variant="contained"
              size="large"
              href="https://wa.me/+553199381294"
              target="_blank"
              className="whatsapp-btn"
              startIcon={<WhatsAppIcon />}
            >
              WhatsApp
            </Button>
            <Button
              variant="contained"
              size="large"
              href="https://www.instagram.com/amorepatasvet/"
              target="_blank"
              className="instagram-btn"
              startIcon={<InstagramIcon />}
            >
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
