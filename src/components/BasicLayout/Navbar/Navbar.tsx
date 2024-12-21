import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        // Try multiple approaches
        className="backgroundColor"
        classes={{ root: "backgroundColor" }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Amor e Patas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
