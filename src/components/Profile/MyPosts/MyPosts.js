import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsData = props.state.posts.map( p => {
      return <Post message={p.text} likesCount={p.likesCount} />
    })

    let newPostElement = React.createRef()

    let addPost = () => {
      props.dispatch({type: 'ADD-POST'})
    }

    let onTextChange = () => {
        let text = newPostElement.current.value 
        props.dispatch({
          type: 'UPDATE-POST-TEXT',
          newText: text
        })
    }

    return (
        <div className={classes.posts}>
          <h2>My posts</h2>
          <div className={classes.addPostForm}>
            <textarea ref={newPostElement} 
                      value = {props.state.newPostText} 
                      onChange={ onTextChange }/>
            <button onClick={ addPost }>Add post</button>
          </div>
          <div className={classes.posts}>
            { postsData }
          </div>
        </div>
    )
}

export default MyPosts