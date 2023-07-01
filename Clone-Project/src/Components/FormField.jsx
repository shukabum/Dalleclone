import { Box, Button,TextField ,InputAdornment, FormControl } from '@mui/material'
import React from 'react'
const FormField = ({labelname,type,name,placeholder,value,handleChange,isSupriseMe,handleSupriseMe, onChange , required}) => {
  return (
    <>
    <Box>
        <Box 
        autoComplete="off"
        noValidate
        sx={{
            display:"flex",
            flexDirection:"column",
            // justifyContent:"center",
            alignItems:"center",
            gap:2,
            mt:1,           
            fontFamily:"monospace",
            fontWeight:"700",
            fontSize:{xs:".9rem",md:"1rem"},
            

        }}>
           
         
                <FormControl  sx={{ ml:{xs: -1}, width: {xs:'90vw',md:'80ch'} , }} variant="outlined">
                {isSupriseMe&& (
                        <Button onClick={handleSupriseMe}  sx={{
                            width:{xs:"fit-content",md:"fit-content"},
                            height:"2rem",
                            color:"black",
                            fontFamily:"monospace",
                            fontWeight:"800",
                            fontSize:{xs:".9rem",md:"1.1rem"},
                            background:"#0EEAB5",
                            ml:1,
                            boxShadow:"rgba(0.2,.2, 0, 0.7) 0px 3px 8px",
                        }}>
                            {`Suprise Me 😲 `}
                        </Button> 
                        
                    )}
                    <TextField
                        label={labelname}
                        
                        // id="outlined-multiline-flexible"
                        sx={{ m: 1, width: '100%',
                            fontFamily:"monospace",
                            
                        }}
                        onChange={onChange}
                    size='small'
                    color="success"
                    // defaultValue="Name"
                    value={value}
                    // contentEditable="true"
                        required={required}
                        
                    />
                   
            
                </FormControl>
              
         
        </Box>
       
       
    </Box>
    </>
  )
}

export default FormField