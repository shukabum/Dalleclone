import React from 'react'
import { downloadImage } from '../utils/index';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, ImageListItem, ImageListItemBar, Typography ,} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
const Card = ({ _id, name, prompt, photo }) => {
  return (
    <Box sx={{
      display:"flex",
      // flexDirection:"column",
      mt:1,
      alignItems:"center",
      justifyContent:"center"
    
      
      

    }}>
      <Box sx={{
        mr:2,
        // display:"block",
       
        // flex:"50%",
        // padding:"auto",
       
        alignItems:"center",

      }}>
        <ImageListItem>
              <Button 
                      onClick={()=>{
                      downloadImage(_id,photo)
                    }}>
                      
                      <img 
                  src={photo}
                  alt={prompt}
                  width={250}
                  height={250}
                  style={{
                    borderRadius:"20px",
                    boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
                    

                    // position:"fixed"
              }}

              />

              
              </Button>
             
          <ImageListItemBar
              //  title={name}
               
              
              sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                background:"rgb(121, 233, 226 ,1) ",
                borderRadius:"20px",
                
              }}
             
              actionIcon={
                
                <Accordion sx={{
                  display:"block",
                 
                  background:"rgb(121, 233, 226 ,1) ",
                  boxShadow:"none",
                
                  fontFamily:"monospace",
                  color:"black",

                }}>
                <AccordionSummary
                sx={{
                  display:"flex",
                  justifyContent:"center",
                  borderRadius:"20px",
                }}
                >
                  <Typography sx={{
                    mt:1,
                    mr:15,

                    display:"flex",
                    justifyContent:"center",
                    // alignItems:"center",
                   
                    fontFamily:"monospace",
                  }}>
                    {name}
                  </Typography>
                <IconButton
                  sx={{ color: "rgb(0,0,0,0.7)" ,
                  
                  borderRadius:"20px",
                  
                }}
                  aria-label={`info about ${prompt}`}
                  
                >
                  
                  <InfoIcon />
                </IconButton>
                </AccordionSummary>
              <AccordionDetails
               sx={{
                display:"flex",
                // justifyContent:"center",
                // alignItems:"center",
                borderRadius:"40px",
              }}>
                <Typography sx={{
                  fontFamily:"monospace",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                }}>
                  {prompt}
                </Typography>
              </AccordionDetails>
              </Accordion>
              }
              
            />
           
        </ImageListItem>
        
         
       
      </Box>
      
     
    </Box>
  )
}

export default Card