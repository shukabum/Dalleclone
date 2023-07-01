import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/OpenAilogo.png';
import { NavLink,Link, Navigate, useNavigate } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import WeekendIcon from '@mui/icons-material/Weekend';
const pages = ['Home','Create'];
const settings = ['Profile',  'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{
        background:"rgb(243, 203, 128)",
        border:"none",
        // boxShadow:"none",
        width:"100vw",
        borderRadius:"20px"

    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* logo */}
          <Link to="/">
          <img src={logo} 
          height={50} width={50}
          style={{
           
            color:"white",
            backgroundBlendMode:"multiply"
          }}
          sx={{
            mr:0
          }}
          />
          </Link>
          <Typography
            variant="h5"
        
            sx={{
                flexGrow:100,
              ml: 0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'Black',
            }}
          >
            OpenAI
          </Typography>

            {/* responsiveness */}
                   
          <Typography
            variant="h5"
            sx={{
              ml: 0,
              flexGrow:1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            OpenAI
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' },
            alignItems:"right",
            justifyContent:"right"
        }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              
            >
              <MenuIcon sx={{
                color:"black",
                
              }}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                
               
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} sx={{
                  background:"wheat",
                  boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
                }}>
                    
                        <Button onClick={()=>{
                          navigate(`/${page}`)
                        }}
                        sx={{
                          fontFamily:"monospace",
                          fontWeight:"800",
                          color:"black",
                          // boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
                        }}>
                        {page}&nbsp;{page=="Home"?<WeekendIcon sx={{
                          color:"#077435  ",
                        }}/>:<CreateIcon sx={{
                          color:"#077435  ",
                        }}/>}
                        </Button>
                        
                    
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{  display: { xs: 'none', md: 'flex' }, }}>
            <Button 
            
           onClick={()=>{
            navigate('/');
           }}
            sx={{
              display:"flex",
              // justifyContent:"center",
              // alignItems:"center",
              background:"#8CDC8C  ",
             fontFamily:"monospace",
             color:"black",
             fontWeight:"700",
              borderRadius:"20px",
              boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
              // textAlign:"center",
            }}>
              
                Home &nbsp; <WeekendIcon sx={{
                  color:"#0A4FEE ",
                }}/>
            
             
            </Button>
            <Button 
            onClick={()=>{
              navigate('/Create');
            }}
            color='primary'
            sx={{
              display:"flex",
              justifyContent:"center",
              // alignItems:"center",
              background:"#1DE4DE ",
              padding:"auto  auto",
              borderRadius:"20px",
              fontFamily:"monospace",
              color:"black",
              boxShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px",
              fontWeight:"700",
              ml:1,
            }}>
             Create &nbsp;<CreateIcon sx={{
              color:"#0A4FEE ",
             }}/>
             
            </Button>
           
          </Box>

                {/* //////////////////////////////for showing user Profile */}

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;