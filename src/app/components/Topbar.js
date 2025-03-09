import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const TopBar = () => {
  return (
    <AppBar id="StyledAppBar" position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold", textAlign:"center" }}>
          Brijanya.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
