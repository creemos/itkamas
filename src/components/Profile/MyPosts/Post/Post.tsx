import React, {useState} from 'react'
import classes from './Post.module.css'

type PostPropsType = {
  message: string
  likesCount: number
}

const Post: React.FC<PostPropsType> = ({message, likesCount}) => {

  const [likes, setLikes] = useState(likesCount)
    return (
            <div className={classes.item}>
              <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Aang.png/274px-Aang.png' alt=''/>
              {message}
              <div><button onClick={() => setLikes(likes + 1)}>LIKE!</button><span className={classes.likes}> {likes}</span></div>
            </div>
    )
}

export default Post