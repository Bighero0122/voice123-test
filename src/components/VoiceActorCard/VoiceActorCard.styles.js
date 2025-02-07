import { styled } from "@mui/material/styles";

export const ActorImage = styled("img")({
  width: "100%",
  borderRadius: "4px",
});

export const ActorLink = styled("a")(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const AudioPlayer = styled("audio")({
  width: "100%",
  marginTop: "16px",
});
