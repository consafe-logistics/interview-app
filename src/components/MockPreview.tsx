import { Grid, styled } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement, ReactNode } from "react";

interface MockPreviewProps {
  image: string;
  implementation: ReactNode
}

const OutlinedImage = styled('img')({
  border: "1px solid black",
  width: '360px',
  height: '640px'
})

const OutlinedBox = styled(Box)({
  border: "1px solid black",
  width: '360px',
  height: '640px'
})

function MockPreview({ image, implementation }: MockPreviewProps): ReactElement {
  return (
    <Grid container>
      <Grid container item xs={12} md={6} justifyContent="center">
        <OutlinedImage src={image} alt="mock" />
      </Grid>
      <Grid container item xs={12} md={6} justifyContent="center">
        <OutlinedBox>
          {implementation}
        </OutlinedBox>
      </Grid>
    </Grid>);
}

export default MockPreview;