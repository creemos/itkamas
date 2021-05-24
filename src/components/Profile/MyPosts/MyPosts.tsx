import React from 'react'
import AddPostForm from './AddPostForm'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {PostType} from '../../types/types'

export type MapPropsType = {
  posts: Array<PostType>
}

export type DispatchPropsType = {
  addPost: (text: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postsData = [...props.posts]
    .reverse()
    .map( (p) => {
      return <Post key = {p.id} message={p.text} likesCount={p.likesCount} />
    })

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