import React from "react";
// import "./style.css"
import { makeStyles } from '@material-ui/core/styles'

import Header from "./components/Header";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
    root: {
       display: 'flex',
       flexDirection: 'column', 
    },
    main: {
        height: '100vh',
        padding: 24
    }, 
    toolbar: {
        minHeight: 64,
    }, 
    box: {
        display: 'flex'
    }
})


function Home(){
    const classes = useStyles();

   return (
       <div className={classes.root}>
           <Header />
           <div className={classes.toolbar}></div>
            <main className={classes.main}>
               <Container maxWidth="lg">
                   <Box className={classes.box}>
                       <Navbar />
                       <Feed />
                   </Box>
               </Container>
               
           </main>
       </div>
   )
}

export default Home