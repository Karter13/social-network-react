import {
    addPost,
    ProfilePageType,
    profileReducer,
    ProfileType,
    setUserProfile,
} from './profile-reducer';

test('correct add new post in array posts for ProfilePage ', () => {
    const startState: ProfilePageType = {
        posts: [
            {id: '1', message: 'Good post', likesCount: 15},
            {id: '2', message: 'I love React', likesCount: 20},
            {id: '3', message: 'I love JS', likesCount: 10},
        ],
        profile: null,
        status: ''
    };

    const newPostText = 'Maikl'

    const action = addPost(newPostText);
    const endState = profileReducer(startState, action);

    expect(endState.posts.length).toBe(4);
    expect(endState.posts[0].likesCount).toBe(15);
    expect(endState.posts[3].likesCount).toBe(0);
    expect(endState.posts[3].id).toBeTruthy();
});


test('correct add date to profile for ProfilePage ', () => {
    const startState: ProfilePageType = {
        posts: [
            {id: '1', message: 'Good post', likesCount: 15},
            {id: '2', message: 'I love React', likesCount: 20},
            {id: '3', message: 'I love JS', likesCount: 10},
        ],
        profile:{
            aboutMe: 'Anna',
            contacts: {
                facebook: 'FB',
                website: 'WS',
                vk: 'VK',
                twitter: 'TW',
                instagram: 'IG',
                youtube: 'YT',
                github: 'GH',
                mainLink: 'ML'
            },
            lookingForAJob: true,
            lookingForAJobDescription: 'yes',
            fullName: 'KM',
            userId: '50',
            photos: {
                small: '//https/photo/s',
                large: '//https/photo/l'
            }
        },
        status: ''
    };

    const profile: ProfileType = {
        aboutMe: 'Maikl',
        contacts: {
            facebook: 'FB',
            website: 'WS',
            vk: 'VK',
            twitter: 'TW',
            instagram: 'IG',
            youtube: 'YT',
            github: 'GH',
            mainLink: 'ML'
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'yes',
        fullName: 'KM',
        userId: '100',
        photos: {
            small: '//https/photo/s',
            large: '//https/photo/l'
        }
    };

    const action = setUserProfile(profile);
    const endState = profileReducer(startState, action);

    if(endState.profile) {
        expect(endState.profile).toBeTruthy();
        expect(endState.profile.userId).toBe('100');
    }
});
