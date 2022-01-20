import React from "react";
import {Box, Paper, Button} from '@material-ui/core';

import './Home.css';


function Home(){
    return(
        <>
         <Paper>
             <Box p={2}>
                 <Box display='flex' justifyContent='center'>
                     <h1>título</h1>
                </Box>
                     <img src="https://yt3.ggpht.com/a/AATXAJxk_Pb_uMYBHCvsACF5hkN1ZiEsYDvd3Eum4g=s900-c-k-c0xffffffff-no-rj-mo" style={{height: '100%',width: '100%'}}/>
                     <Box  display='flex' justifyContent='center' p={2}>
                         <Button color="primary" variant="contained">Butão 1</Button>
                         <Button color="secondary"  variant="contained">Butão 2</Button>
                    </Box>
                 </Box>
         </Paper>
        </>
        
        );
}

export default Home;