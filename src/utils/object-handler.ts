import {UsersType} from "../redux/usersReducer";

export const updateObjectInArray = (items: UsersType, itemId:number,typeOfProp: any, neObjProps: any) => {
    return items.map(u => {
        if(u.id === itemId) {
            return {...u, ...neObjProps}
        }
        return u
    })
}