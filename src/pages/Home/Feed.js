import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import PostCard from '../../components/PostCard'

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

const posts = [
  {
    id: 1,
    autor: {
      name: 'Pablo Teixeira',
      username: 'pabllot07',
      avatar: 'images/avatars/pablo.jpg.jpeg'
    },
    title: 'The vampire diaries',
    date: '19/04/1999',
    description: 'very nice tv show',
    hashtags: '#dotnet, #javascript',
    image: "/images/posts/teste.png"
    },
    {
      id: 2,
      autor: {
        name: 'Pablo Teixeira',
        username: 'pabllot07',
        avatar: 'images/avatars/pablo.jpg.jpeg'
      },
      title: 'The vampire diaries',
      date: '19/04/1999',
      description: 'very nice tv show',
      hashtags: '#dotnet, #javascript',
      image: "/images/posts/teste.png"
      },
      {
        id: 3,
        autor: {
          name: 'Pablo Teixeira',
          username: 'pabllot07',
          avatar: 'images/avatars/pablo.jpg.jpeg'
        },
        title: 'The vampire diaries',
        date: '19/04/1999',
        description: 'very nice tv show',
        hashtags: '#dotnet, #javascript',
        image: "/images/posts/teste.png"
        },
  
]

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default Feed