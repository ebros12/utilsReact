import { useEffect, useState } from "react";

import { Box, Paper, Typography, Collapse, Alert, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

export const OrderCards = () => {
    const etiquetas = [0,1,2];
    const imgs = [
      'https://cdn.pixabay.com/photo/2022/11/22/16/31/wooden-pegs-7610106__340.jpg',
      'https://cdn.pixabay.com/photo/2022/09/26/01/45/egret-7479478__340.jpg',
      'https://cdn.pixabay.com/photo/2022/11/18/18/04/leaves-7600669__340.jpg',
    ]
    const [etiquetasState, setEtiquetasState] = useState(etiquetas);
    const [open, setOpen] = useState(true);
    useEffect(() => {
      setEtiquetasState(etiquetas) 
    }, [])
    
    const onClick = (id:number) =>{
  
      const filtro = etiquetas.filter((a) =>{
        if(a == id){
          return 0;
        }
        if(a < id){
          return -1;
        }
        return -1
      });
      filtro.unshift(id)
      console.log(filtro);
      setEtiquetasState(filtro)
      return filtro;
  
    }

  return (
    <Box>
            <Collapse in={open}>
        <Alert
          icon={false}
          action={
              <CloseIcon 
              onClick={() => {
                setOpen(false);
              }} fontSize="large" />
          }
          sx={{ mb: 2 }}
        >
          <Typography variant="h5" component="h5" sx={{textAlign:'center', padding:'2rem'}}>Hacer click para ordernar de los primeros</Typography>
        </Alert>
      </Collapse>
      
        <Typography variant="h3" component="h3" sx={{textAlign:'center', padding:'2rem'}}>Ordenar cartas</Typography>
      <Grid2 container spacing={2}>
        {
          etiquetasState.map((item) =>(
            <Grid2 xs={12} md={4} key={item}>
          <Paper sx={{ cursor:'pointer',textAlign:'center' }} elevation={3} onClick={() => onClick(item)} key={item}>
            <img
              src={`${imgs[item]}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${imgs[item]}?w=164&h=164&fit=crop&auto=format`}
              alt={`img ${item}`}
              loading="lazy"
              
            />
            </Paper>
            </Grid2>
          ))
        }
      </Grid2>

    </Box>
)
}
