import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsData = props.posts.posts.map( p => {
      return <Post message={p.text} likesCount={p.likesCount} />
    })

    return (
        <div className={classes.posts}>
          <h2>My posts</h2>
          <div className={classes.addPostForm}>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={classes.posts}>
            { postsData }
          </div>
        </div>
    )
}

export default MyPosts