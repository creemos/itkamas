import { profileReducer } from './profileReducer';
import { addPostActionCreator } from "./store";


it('adding new post', () => {
    let action = addPostActionCreator('its test post');
    let state = {
        posts: []
    };
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
})

