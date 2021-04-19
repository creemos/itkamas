import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsData = props.posts.posts.map( p => {
      return <Post message={p.text} likesCount={p.likesCount} />
    })

    let newPostElement = React.createRef()

    let addPost = () => {
      let text = newPostElement.current.value
      props.addPost(text)
    }

    return (
        <div className={classes.posts}>
          <h2>My posts</h2>
          <div className={classes.addPostForm}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={ addPost }>Add post</button>
          </div>
          <div className={classes.posts}>
            { postsData }
          </div>
        </div>
    )
}

export default MyPosts