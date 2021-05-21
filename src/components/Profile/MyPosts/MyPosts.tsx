import React from 'react'
import AddPostForm from './AddPostForm'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsPropsType = {
  profilePage: {
    posts: Array<{
      id: number
      text: string
      likesCount: number
    }>
  }
  addPost: (value: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsData = props.profilePage.posts.map( p => {
      return <Post key = {p.id} message={p.text} likesCount={p.likesCount} />
    }).reverse()


    let onAddPost = (data: any) => {
      props.addPost(data.newPostText)
      data.newPostText = ''
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