import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let posts = [
      {id: 1, text: 'first post!', likesCount: 22},
      {id: 2, text: 'second post!', likesCount: 8}
    ]

    return (
        <div className={classes.posts}>
          <h2>My posts</h2>
          <div className={classes.addPostForm}>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={classes.posts}>
            <Post message={posts[0].text} likesCount={posts[0].likesCount}/>
            <Post message={posts[1].text} likesCount={posts[1].likesCount}/>
          </div>
        </div>
    )
}

export default MyPosts