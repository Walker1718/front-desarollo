import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CardMedia from "@mui/material/CardMedia";

export default function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <Container
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <CardMedia 
              sx={{ maxWidth: 50 }}
              component="img"
              height="50"
              image="../images/logo.png"
              alt="Logo"
            />

            <Button color="inherit" onClick={() => navigate('/centro-distribucion')}>
              Centro distribucion
            </Button>
            <Button color="inherit" onClick={() => navigate('/farmacia')}>
              Farmacia
            </Button>
            <Button color="inherit" onClick={() => navigate('/medicamento')}>
              Medicamento
            </Button>
            
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    </Container>
  );
}
