import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="backgroundColor"
        classes={{ root: "backgroundColor" }}
        position="static"
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="src/assets/images/aep.svg"
              alt="Logo"
              style={{ width: 24, height: 24 }}
            />
            <Typography variant="h6" component="div">
              Amor e Patas
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
