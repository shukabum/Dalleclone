import React, { useState } from 'react'
import { getRandomPrompts } from '../utils'
import { Box ,Button,Typography} from '@mui/material'
import FormField from './FormField'
import Loader from './Loader'
import preview from '../assets/OpenAilogo.png'
import { Form, useNavigate } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm]= useState(
        {
            name:"",
            prompt:"",
            photo:"",

        }
    );
    const [generatingImg,setgeneratingImg] =useState(false);
    const [loading,setLoading]= useState(false);
    
    const handleSubmit= async(e)=>{
        
        if(form.prompt && form.photo){
           e.preventDefault();
            setLoading(true);

            try{
                const response = await fetch("http://localhost:8080/api/v1/post",{
                    method:"Post",
                    headers:{
                        'Content-Type':'application/json',

                    },
                    body:JSON.stringify({...form,}),
                    
                })
                await response.json();
                
                // console.log(response)
                navigate('/');
            }
            catch(err){
                alert(err)
            }
            finally{
                setLoading(false);
            }
        }
        else{
            alert('Please enter the prompt and generate the image');
        }

    }
    const handleChange1=(e)=>{
        setForm({
            ...form,
           name:e.target.value,
        })

    }
    const handleChange2=(e)=>{
        setForm({
            ...form,
            prompt:e.target.value,
        })

    }
    const handleSupriseMe=()=>{
        const randomPrompts = getRandomPrompts(form.prompt);
        setForm({...form, prompt:randomPrompts});

    }
    const generateImage= async()=>{
        if(form.prompt){
            try{
                setgeneratingImg(true);

                const response = await fetch("http://localhost:8080/api/v1/dalle",
                {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body :JSON.stringify({
                        prompt:form.prompt
                    }),
                }

                )
               
                console.log(response);
                const data = await response.json();
                
                  
                setForm({
                    ...form,
                    photo:`data:image/jpeg;base64,${data.photo}`,
                    // photo : response['data'][0]['url']
                })
                
            }catch(error){
                alert(error);
                console.log(error);
            }
            finally{
                setgeneratingImg(false);
            }
        }
        else{
            alert("please enter the prompt");
        }

    }
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        mt:5,
    }}>
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            ml:1,
            mt:4,
        }}>
            <Typography
                
                sx={{
                    fontFamily:'monospace',
                    fontWeight:"800",
                    fontSize:{xs:"1.2rem",md:"2.2rem"}
                }}
            >
               Create
            </Typography>
            <Typography
        
                sx={{
                    fontFamily:'monospace',
                    fontWeight:"400",
                    letterSpacing:".01rem",
                    color:"grey",
                    fontSize:{xs:".9rem",md:"1.5rem"}
                }}

            >
                Create imaginative and visually stunning images through DALL-E and share them with the community.
            </Typography>
        </Box>
        <Box>
            <form onSubmit={handleSubmit}>
                <Box 
                sx={{
                    mt:4,
                    ml:0,

                }}>
                   
                    <FormField 
                    labelname="Your Name"
                    type="text"
                    name="name"
                    value={form.name}
                    required={"true"}
                    onChange={handleChange1}
                    />
                    <FormField 
                    labelname="Prompt"
                    type="text"
                    name="prompt"

                    value={form.prompt}
                    required={"true"}
                    onChange={handleChange2}
                    isSupriseMe
                    handleSupriseMe={handleSupriseMe}
                    />
                </Box>
                <Box>
                    {
                        form.photo?
                    (<Box
                        sx={{
                            display:"flex",
                            justifyContent:"center",
                            mt:2,
                            height:{xs:"100",md:"500"},
                            width:{xs:"100",md:"500"},
                            // width:{500},

                        }}
                    >
                        <img 
                        src={form.photo}
                        alt={form.prompt}
                            height={250}
                            width={250}
                            style={{
                                boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
                                borderRadius:"20px",
                               
                            }}
                        /></Box>)
                        :(<Box sx={{
                            display:"flex",
                            justifyContent:"center",
                            mt:2,

                        }}>
                            
                            <img
                            src={preview}
                            height={100}
                            width={100}
                            style={{
                                opacity:0.6,
                                //  boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
                                //  borderRadius:"20px",


                            }}
                            // alt={preview}
                            />
                            </Box>
                        )
                    }
                    {generatingImg && (
                        <Box sx={{
                            display:"flex",
                            justifyContent:"center",
                            mt:1,
                            
                            
                        }}>
                            <Loader/>
                        </Box>
                    )}
                </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",

                }}>
                    <Button 
                    endIcon={<PrecisionManufacturingIcon/>}
                    sx={{
                        background:"#62EE1C",
                        color:"black",
                        fontFamily:"monospace",
                        fontSize:"1rem",
                        fontWeight:"800",
                        mt:2,
                        boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
                        
                    }} 
                    onClick={generateImage}>
                       {generatingImg ? '{Generating...}': 'Generate'}
                    </Button>
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    // justifyContent:"center",
                    alignItems:"center",
                    fontFamily:"monospace",
                    fontWeight:"600",
                    fontSize:"1rem",
                    color:"grey",
                    mt:3,
                }}>
                    <Typography 
                    sx={{
                        display:"flex",
                        // flexDirection:"column",
                        justifyContent:"center",
                        
                        ml:2,
                        fontFamily:"monospace",
                        fontWeight:"600",
                        fontSize:{xs:"0.8rem",md:"1.3rem"},
                        color:"grey",

                    }}>

                     {`{ Once you have created the image you want, you can share it with others in the community}`}
                    </Typography>
                    
                    <Button
                        type='submit'
                        variant='contained'
                        endIcon={<SendIcon />}
                        sx={{
                            
                            background:"#F64FA5 ",
                            color:"white",
                            fontFamily:"monospace",
                            fontSize:"1rem",
                            fontWeight:"800",
                            mt:2,
                            ml:1,
                            width:"fit-content",
                            boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
                        }}
                        
                    >
                        {loading? 'Sharing...': 'Share with community'}
                    </Button>
                </Box>
            </form>
        </Box>

    </Box>
  )
}

export default CreatePost