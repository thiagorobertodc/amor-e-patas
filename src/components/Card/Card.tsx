import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

// Props for customization
interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode; // Icon passed as a prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  icon,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
        minHeight: 200, // Consistent height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        boxShadow: 3, // Subtle shadow effect
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#24483a" }}>
            {" "}
            {/* Dark green color */}
            {icon}
          </Avatar>
        }
        title={<Typography variant="h6">{title}</Typography>}
        subheader={<Typography variant="body2">{subtitle}</Typography>}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
