"use client";

import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import Dubright from "./Dubright";
import KStorage from "./KStorage";
import WearAgain from "./WearAgain";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",

  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.background.paper,
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const StyledExpandedContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  paddingLeft: 16,
  paddingRight: 16,
  flexGrow: 1,
});

interface ProjectCardProps {
  id: string;
  img: string;
  type: string;
  title: string;
  description: string;
  expanded: boolean;
  onToggle: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <StyledCard
      variant="outlined"
      onFocus={() => handleFocus(0)}
      onBlur={handleBlur}
      tabIndex={0}
      className={focusedCardIndex === 0 ? "Mui-focused" : ""}
    >
      <CardMedia
        component="img"
        alt="card Image"
        image={props.img}
        sx={{
          aspectRatio: "auto",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      />
      <StyledCardContent>
        <Typography gutterBottom variant="caption" component="div">
          {props.type}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
          {props.description}
        </StyledTypography>
      </StyledCardContent>
      <Collapse
        in={props.expanded}
        timeout={300}
        easing={"ease-in-out"}
        unmountOnExit
      >
        <StyledExpandedContent>
          {props.title === "Dubright" && <Dubright />}
          {props.title === "KStorage" && <KStorage />}
          {props.title === "WearAgain" && <WearAgain />}
        </StyledExpandedContent>
      </Collapse>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <IconButton
          onClick={props.onToggle}
          aria-expanded={props.expanded}
          aria-label="show more"
          sx={{ border: "none", transform: "rotate(90deg)" }}
        >
          {props.expanded ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}
