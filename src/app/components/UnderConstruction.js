import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ConstructionIcon from "@mui/icons-material/Construction";

const UnderConstruction = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 64px)",
    textAlign: "center",
    color: "#555",
});

const AnimatedIcon = styled(ConstructionIcon)({
    fontSize: "5rem",
    animation: "bounce 2s infinite",
    "@keyframes bounce": {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0)" },
    },
});

const CenterPage = () => {
    return (
        <>
            <UnderConstruction>
                <AnimatedIcon />
                <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
                    Under Construction
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                    We&#39;re working hard to bring you something amazing!
                </Typography>
            </UnderConstruction>
        </>
    )
};

export default CenterPage;
