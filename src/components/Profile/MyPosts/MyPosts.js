import React from 'react'
import AddPostForm from './AddPostForm'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsData = props.profilePage.posts.map( p => {
      return <Post key = {p.id} message={p.text} likesCount={p.likesCount} />
    })


    let onAddPost = (data) => {
      props.addPost(data.newPostText)
    }
    
    return (
        <div className={classes.posts}>
          <h2>My posts</h2>
          <AddPostForm 
            onSubmit={onAddPost}/>
          <div className={classes.posts}>
            { postsData }
          </div>
        </div>
    )
}

export default MyPosts