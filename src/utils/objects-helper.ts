import {UserType} from '../redux/users-reducer';

export const updateObjectInArray = (items: Array<UserType>, itemId: string, id: any, newObjProps: any) => {
    return items.map(u => {
        if (u.id === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
