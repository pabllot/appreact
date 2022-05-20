import React from "react";
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather'

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    }
})

function Header(){
const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
             <Toolbar>
                 <img src='/images/logo.png' alt="logo" className={classes.img}/>
                 <div>
                    <Button color='primary' variant='contained'>Novo Post</Button>
                    <SvgIcon>
                        <Bell />
                    </SvgIcon>
                 </div>
                 {/* <div className="">
                     <span>Conecta Dev</span>
                 </div>
                 <div className="">
                     
                     <span>img1</span>
                     <span>img2</span>
                 </div> */}
             </Toolbar>
        </AppBar>
    )
}

export default Header