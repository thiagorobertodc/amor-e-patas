import React from "react";
import "./style.scss";
import HomeIcon from "@mui/icons-material/Home";
import ScienceIcon from "@mui/icons-material/Science";
import Button from "@mui/material/Button";
import ServiceCard from "../../components/Card/Card";

const Services = () => {
  const services = [
    {
      title: "Exames Laboratoriais",
      subtitle: "Resultados rápidos e precisos",
      description:
        "Realizamos exames como ultrassonografia, coleta de sangue e outros testes laboratoriais para garantir diagnósticos rápidos e eficazes.",
      icon: <ScienceIcon />,
    },
    {
      title: "Atendimento a Domicílio",
      subtitle: "Conforto para seu pet",
      description:
        "Consultas e atendimentos veterinários no conforto da sua casa, reduzindo o estresse e trazendo mais comodidade para os animais.",
      icon: <HomeIcon />,
    },
  ];

  return (
    <div className="services-container">
      {/* Header Section */}
      <div className="services-header">
        <img
          src="/src/assets/images/aep_green.svg" // Example logo usage
          alt="Amor e Patas"
          className="logo-header"
        />
        <h2>Nossos Serviços</h2>
        <p>
          Oferecemos o melhor cuidado para o seu pet com serviços
          personalizados.
        </p>
      </div>

      {/* Cards Section */}
      <div className="services-cards">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-container">
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://wa.me/+553199381294"
          target="_blank"
          sx={{ marginTop: 1 }}
        >
          Agende uma Consulta
        </Button>
      </div>
    </div>
  );
};

export default Services;
