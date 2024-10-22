import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, 
     IconButton,Stack, Box, Avatar,Dialog,
     DialogTitle, DialogContent, DialogContentText, DialogActions,
     Grid
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'


const Noticia = ({ avatar,titulo,fecha, imagen,altavt, altimg, testimonio, likes }) => {
    
    const [openDialog, setOpenDialog] = useState(false);
    const handleDialogOpen = () => {
        setOpenDialog(true);
      };

      const handleDialogClose = () => {
        setOpenDialog(false);
      };
      
    const [meGusta, setMeGusta] = useState(false);
    const handleLike = () => {
    setMeGusta(!meGusta);
  }

     const [count1] = useState(30)


  return (
    <Stack direction={'column'}  alignItems={'center'} sx={{ marginTop: 5 }}>

      <Card elevation={12}>

       <CardContent >
        <Box display={'flex'} >
        <Avatar alt={altavt} src={avatar}> {avatar} </Avatar>

        <Box textAlign={'center'} sx={{
        marginLeft: { xs: '80px', sm: '200px', md: '580px' } }}>
        <Typography variant="caption" color="text.secondary"> {titulo} </Typography> <br />
        <Typography variant="caption" color="text.secondary"> {fecha} </Typography>
        </Box>

        <IconButton sx={{  marginLeft: { xs: '80px', sm: '150px', md: '580px' } }}>
        <MoreVertIcon></MoreVertIcon>
        </IconButton>
        </Box>
        </CardContent>

        <CardMedia
          component="img"
          height="194"
          image={imagen}
          alt={altimg}
        />
        <CardContent>
            
            <Box sx={{ textAlign: 'justify' }}>
            <Typography sx={{fontSize:14}} variant="subtitle" color="text.primary" >{testimonio}</Typography>
            </Box>
            <br /> 

            <Box sx={{ textAlign: 'left' }}>
        
          <IconButton onClick={handleLike} sx={{ alignSelf: 'flex-start' }}>
            {meGusta ? <Typography>{count1+1}</Typography> : <Typography>{count1}</Typography> }
            {meGusta ?  <FavoriteIcon color="secondary"/>  : <FavoriteBorderIcon color='secondary' />}
          </IconButton>
         
          <IconButton  onClick={handleDialogOpen} sx={{ alignSelf: 'flex-start' }}>
          {meGusta ? <ShareIcon color="secondary"/> : <ShareIcon disabled/>}
          </IconButton>
          </Box>

        </CardContent>

        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>COMPARTIR</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ¿A través de que plataforma quieres compartir?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <WhatsAppIcon onClick={() => {console.log('Enviando por WhatsApp');
              handleDialogClose();
            }} ></WhatsAppIcon>
            <TelegramIcon onClick={() => {console.log('Enviando por Telegram');
              handleDialogClose();
            }} ></TelegramIcon>
          </DialogActions>
        </Dialog>


      </Card>
    </Stack>
  );
};

export default Noticia;