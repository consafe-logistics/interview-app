import { Button } from "@mui/material";
import { ReactElement } from "react";
import useGoBack from "../hooks/useGoBack";

function BackButton(): ReactElement {
  const goBack = useGoBack();
  
  return (<Button onClick={goBack}>Go back</Button>);
}

export default BackButton;