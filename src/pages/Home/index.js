import React from "react";
// import "./style.css"
import { makeStyles } from '@material-ui/core/styles'

import Header from "./components/Header";
import Feed from "./Feed";
import Navbar from "./Navbar";


const useStyles = makeStyles({
    root: {
       display: 'flex',
       flexDirection: 'column', 
    },
    main: {
        height: '100vh',
        display: 'flex',
        width: '1200px',
        margin: '0 auto',
    }
})


function Home(){
    const classes = useStyles();

   return (
       <div className={classes.root}>
           <Header />
           <div className="toolbar"></div>
            <main className={classes.main}>
               <Navbar />
               <Feed />
           </main>
       </div>
   )
}

export default Home