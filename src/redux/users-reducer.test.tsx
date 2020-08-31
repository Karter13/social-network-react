import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    unfollow,
    UsersPageType,
    usersReducer
} from './users-reducer';

test('correct change followed to true', () => {

    const startState: UsersPageType = {
        users: [
            {
                id: '1',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: false,
                name: 'Maikl',
                status: 'I am a good boy',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: '2',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: false,
                name: 'Alex',
                status: 'I am a good boy too',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ],
        pageSize: 10,
        totalUserCount: 100,
        currentPage: 1,
        isFetching: true,
    };

    const action = follow('2');
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(2);
    expect(endState.users[1].followed).toBe(true);
});

test('correct change followed to false', () => {

    const startState: UsersPageType = {
        users: [
            {
                id: '1',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: true,
                name: 'Maikl',
                status: 'I am a good boy',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: '2',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: false,
                name: 'Alex',
                status: 'I am a good boy too',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ],
        pageSize: 10,
        totalUserCount: 100,
        currentPage: 1,
        isFetching: true,
    };

    const action = unfollow('1');
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(2);
    expect(endState.users[0].followed).toBe(false);
});

test('correct change users in array users', () => {

    const startState: UsersPageType = {
        users: [
            {
                id: '1',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: true,
                name: 'Maikl',
                status: 'I am a good boy',
                location: {city: 'Grodno', country: 'Belarus'}
            }
        ],
        pageSize: 10,
        totalUserCount: 100,
        currentPage: 1,
        isFetching: true,
    };

    const users = [
        {
            id: '3',
            photos: {
                small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
            },
            followed: false,
            name: 'Anna',
            status: 'I am a good boy too',
            location: {city: 'Grodno', country: 'Belarus'}
        },
        {
            id: '4',
            photos: {
                small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
            },
            followed: false,
            name: 'Alex',
            status: 'I am a good boy too',
            location: {city: 'Grodno', country: 'Belarus'}
        }
    ];

    const action = setUsers(users);
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(2);
    expect(endState.users[0].id).toBe('3');
    expect(endState.users[1].name).toBe('Alex');
    expect(endState.users[1].followed).toBe(false);
});

test('correct change number in currentPage', () => {

    const startState: UsersPageType = {
        users: [
            {
                id: '1',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: true,
                name: 'Maikl',
                status: 'I am a good boy',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: '2',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: false,
                name: 'Alex',
                status: 'I am a good boy too',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ],
        pageSize: 10,
        totalUserCount: 100,
        currentPage: 1,
        isFetching: true,
    };

    const action = setCurrentPage(5);
    const endState = usersReducer(startState, action);

    expect(endState.currentPage).toBe(5);
    expect(typeof endState.currentPage).toBe('number');
});

test('correct change number in totalUserCount', () => {

    const startState: UsersPageType = {
        users: [
            {
                id: '1',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: true,
                name: 'Maikl',
                status: 'I am a good boy',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: '2',
                photos: {
                    small: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
                    large: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg'
                },
                followed: false,
                name: 'Alex',
                status: 'I am a good boy too',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ],
        pageSize: 10,
        totalUserCount: 100,
        currentPage: 1,
        isFetching: true,
    };

    const action = setUsersTotalCount(70);
    const endState = usersReducer(startState, action);

    expect(endState.totalUserCount).toBe(70);
    expect(endState.totalUserCount).toBeTruthy();
    expect(typeof endState.totalUserCount).toBe('number');
});
