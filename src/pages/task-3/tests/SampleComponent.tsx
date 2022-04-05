import { Box, Button, Modal, Typography } from "@mui/material";
import { ReactElement, useState } from "react";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function SampleComponent(): ReactElement {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Box>
        <Typography>{`Clicks: ${count}`}</Typography>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setIsVisible(true)}>Open Modal</Button>
      </Box>
      <Modal
        open={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <Box sx={style}>
            Text in a modal
        </Box>
      </Modal>
    </>


  );
}

export default SampleComponent;