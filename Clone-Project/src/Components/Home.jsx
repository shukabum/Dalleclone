import { Box,Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import FormField from './FormField';
import Loader from './Loader';
import Footer from './Footer';
import Card from './Card'
const RenderCards =({data,title})=>{
    //   console.log(data)
    if(data?.length>0){
        return data.map((post)=><Box sx={{
            
           
            
        }}><Card key = {post._id} {...post}/></Box>)
    }
    else{
       
    return (
        <Typography sx={
            {
                fontFamily:"monospace",
                fontSize:{xs:".9rem",md:"1.2rem"},
            }
        }>
            {title}
        </Typography>
    )
    }
}
const Home = () => {
    const [loading,setLoading] = useState(false);
    const [allPosts,setAllPosts] = useState(null);
    const [searchText,setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState(null);

        const fetchPosts = async ()=>{
            setLoading(true);
            try{
                const response = await fetch("http://localhost:8080/api/v1/post",{
                    method:"GET",
                    headers:{
                        'Content-Type':'application/json'

                    },

                });
                if(response.ok){

                    const result = await response.json();
                    setAllPosts(result.data.reverse());
                    console.log(result)
                }
            }catch(err){

            }
            finally{
                setLoading(false);
            }
        }
        useEffect(()=>{
            fetchPosts();
        },[])
        const handleSearchChange = (e) => {
            clearTimeout(searchTimeout);
            setSearchText(e.target.value);
        
            setSearchTimeout(
              setTimeout(() => {
                const searchResult = allPosts.filter(
                    (item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
                console.log(searchResult);
                setSearchedResults(searchResult);
              },500),
            );
          };
   
  
  return (
    <>
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        mt:5,
    }}>
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            ml:2,
            mt:4,
        }}>
            <Typography
                
                sx={{
                    fontFamily:'monospace',
                    fontWeight:"500",
                    fontSize:{xs:"1.2rem",md:"2rem"}
                }}
            >
                The Community Showcase
            </Typography>
            <Typography
                
                sx={{
                    fontFamily:'monospace',
                    fontWeight:"400",
                    letterSpacing:".01rem",
                    color:"grey",
                    fontSize:{xs:".9rem",md:"1.2rem"}
                }}

            >
                Browse through a collection of imaginative and visually stunning images generated by DALL-E AI.
            </Typography>
        </Box>
        <Box sx={{
            ml:2,
            mt:4,
            color:"black",
        }}>
            <FormField
                labelname="Search posts"
                type="text"
                name="text"
                placeholder="Search something..."
                value={searchText}
                onChange={handleSearchChange}
               
            />
        </Box>
        <Box sx={{
           
            display:{xs:"flex",md:"flex"},
            justifyContent:"center",
            alignItems:"center"

        }}>
           {loading?<Box><Loader/></Box>:<>
            {searchText && <Typography 
           
            sx={{
                fontFamily:"monospace",
                fontWeight:"400",
                color:'black',
                display:{xs:"flex",md:"flex"},
                // width:{xs:"100%",md:"100%"},
                fontSize:{xs:"1rem",md:"1.4rem"}

            }}>
                Showing results for:'<Typography 
                 
                 sx={{
                    fontFamily:"monospace",
                    fontWeight:"400",
                    color:'grey',
                    fontSize:{xs:"01rem",md:"1.4rem"}
    
                }}
                > {`${searchText}`}</Typography>'</Typography>}
           </>}
        </Box>
        <Box sx={
            {
                mt:2,
                ml:2,
                display:"grid",
                gridTemplateColumns:{xs:"auto",sm:"auto auto ",md:"auto auto auto "},
                color:"grey",
                transition:"ease 0.5s",
                
                justifyContent:"center",

            }
        }>
            {searchText?
            <RenderCards data={searchedResults} title="No searched results found"/>:
            <RenderCards data={allPosts} title="No posts found"/>
            }
        </Box>
        
    </Box>
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        fontFamily:"monospace",
        fontWeight:"800",
        fontSize:"1rem",
        mt:5,
    }}>
        <Footer/>
    </Box>
    </>
  )
}

export default Home