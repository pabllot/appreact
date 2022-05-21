import React from 'react'
import { makeStyles } from '@material-ui/core/Styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2)
  },
  button: {
    width: '100%'
  }
}))

const tags = [
  { id: 1, name: 'Supernatural'},
  { id: 2, name: 'Friends'},
  { id: 3, name: 'HowIMetYourMother'},
  { id: 4, name: 'Prison Break'},
  { id: 5, name: 'Stranger Things'},
  { id: 6, name: 'Dexter'},
]


function Navbar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button variant='outlined' color='secondary' className={classes.button}>Register for free</Button>
      <ListSubheader>{`series trending`}</ListSubheader>
      {
        tags.map((item) => (
          <ListItem dense button key={`item.id}-${item.name}`}>
            <ListItemText primary={`#${item.name}`} />
          </ListItem>
        ))
      }
      <ListItem button>
       show more series
      </ListItem>
    </Paper>
  )
}

export default Navbar