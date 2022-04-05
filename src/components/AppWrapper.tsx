
import { Container, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';


function AppWrapper() {
  return (
    <Container>
      <Paper sx={{p: 3, m: 3}}>
        <Outlet />
      </Paper>
    </Container>
  );
}

export default AppWrapper;
