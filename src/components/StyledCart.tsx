import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  gap: 0,
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.background.paper,
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

export const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
});

export const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 5,
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: 16,
});

export const StyledExpandedContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  paddingLeft: 16,
  paddingRight: 16,
  flexGrow: 1,
});
