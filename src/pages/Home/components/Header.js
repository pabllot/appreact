import React from "react";
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather'
import Avatar from '@material-ui/core/Avatar'


const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    }, 
    button: {
        marginRight: 10
    }, 
    bell: {
        marginRight: 10
    }
})

function Header(){
const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
             <Toolbar>
                 <img src='/images/logo.png' alt="logo" className={classes.img}/>
                 <div className={classes.grow}></div>
                 <div className={classes.userSection}>
                    <Button  color='primary' variant='contained' className={classes.button}>New Post</Button>
                    <SvgIcon className={classes.bell}>
                        <Bell />
                    </SvgIcon>
                    <Avatar alt="Pemy Harp" src='/static/imges/avatar/1.jpg' />
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