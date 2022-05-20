import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    }
}))

function PostCard({ post }) {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardHeader>

        </CardHeader>
        <CardContent>

        </CardContent>
        <CardActions>

        </CardActions>

    </Card>
  )
}

export default PostCard