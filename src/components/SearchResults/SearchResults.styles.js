import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ResultsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const LoaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(3),
  width: "100%",
}));
