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
      author: {
        name: 'Pablo Teixeira',
        username: 'pabllot07',
        avatar: 'images/avatars/pablo.jpg.jpeg'
      },
      title: 'Breaking Bad',
      date: 'January 8th, 2008',
      description: 'very nice tv show',
      hashtags: '#BreakingBad',
      image: "/images/posts/bb.jpg"
      },
      {
        id: 2,
        author: {
          name: 'Pablo Teixeira',
          username: 'pabllot07',
          avatar: 'images/avatars/pablo.jpg.jpeg'
        },
        title: 'The vampire diaries',
        date: 'September 10th, 2009',
        description: 'very nice tv show',
        hashtags: '#TheVampireDiaries',
        image: "/images/posts/tvd.jpg"
        },
      {
        id: 3,
        author: {
          name: 'Pablo Teixeira',
          username: 'pabllot07',
          avatar: 'images/avatars/pablo.jpg.jpeg'
        },
        title: 'Vikings',
        date: 'March 3rd, 2013',
        description: 'very nice tv show',
        hashtags: '#Vikings',
        image: "/images/posts/vk.jpg"
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