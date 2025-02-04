import React from "react";
import WhatsappButton from "../../components/Socials/Whatsapp/WhatsappButton";
import vetImage from "../../assets/images/vet1.png";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="body-container">
      <div className="content">
        <div className="left-section">
          <img src={vetImage} alt="Veterinária" className="vet-image" />
        </div>
        <div className="right-section">
          <p>
            Olá! Sou Raís Faria Fonseca Emiliano, médica veterinária (CRMV/MG
            32259). Atendo a domicílio, trazendo cuidado e amor para os nossos
            bichinhos. Durante a graduação, tive experiências incríveis em
            estágios que me ajudaram a me tornar a profissional que sou hoje.
          </p>
          <p>
            Acredito que cada animal tem sua própria história e merece atenção
            personalizada. Meu compromisso é proporcionar um atendimento com
            carinho e responsabilidade, garantindo bem-estar e qualidade de vida
            para os pets e tranquilidade para seus tutores.
          </p>
          <p>
            Desde consultas preventivas até cuidados específicos, estou aqui
            para ajudar. Seja um filhote cheio de energia ou um companheiro mais
            idoso que precisa de cuidados especiais, minha missão é sempre
            oferecer o melhor tratamento. Conte comigo para cuidar do seu
            bichinho como ele merece!
          </p>
          <div className="whatsapp-container">
            <WhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
