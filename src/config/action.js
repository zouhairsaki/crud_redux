export const AdduserAction = (user) => {
    return {
        type: "AddUser",
        payload: user
    }
}
export const UpdateUserAction = (newuser) => {
    return {
        type: "UpdateUser",
        payload: newuser
    }
}
export const DeleteUserAction = (id) => {
    return {
        type: "DeleteUser",
        payload:id
    }
}