import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const whatsappLink = "https://wa.me/+553199381294";

const handleClick = () => {
  window.open(whatsappLink, "_blank");
};

export default function WhatsappButton() {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<WhatsAppIcon />}
      onClick={handleClick}
    >
      Whatsapp
    </Button>
  );
}
