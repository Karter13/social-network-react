import {ProfilePageType} from './store';
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from './profile-reducer';

test('correct add new post in array posts for ProfilePage ', () => {
    const startState: ProfilePageType = {
        posts: [
            {id: '1', message: 'Good post', likesCount: 15},
            {id: '2', message: 'I love React', likesCount: 20},
            {id: '3', message: 'I love JS', likesCount: 10},
        ],
        newPostText: ''
    };

    const action = addPostActionCreator();
    const endState = profileReducer(startState, action);

    expect(endState.posts.length).toBe(4);
    expect(endState.posts[0].likesCount).toBe(15);
    expect(endState.posts[3].likesCount).toBe(0);
    expect(endState.posts[3].id).toBeTruthy();
    expect(endState.newPostText).toBe('');

});

test('correct add new text in newPostText for ProfilePage ', () => {
    const startState: ProfilePageType = {
        posts: [
            {id: '1', message: 'Good post', likesCount: 15},
            {id: '2', message: 'I love React', likesCount: 20},
            {id: '3', message: 'I love JS', likesCount: 10},
        ],
        newPostText: ''
    };

    const text = 'text for test';

    const action = updateNewPostTextActionCreator(text);
    const endState = profileReducer(startState, action);

    expect(endState.posts.length).toBe(3);
    expect(endState.newPostText).toBe('text for test');
    expect(typeof endState.newPostText).toBe('string');
});
