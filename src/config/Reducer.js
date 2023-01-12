const initState = {
    users: [
        { id: 1, name: "mohammed allaoui", email: "allaoui@gmail.com" },
        { id: 2, name: "said Hamdan", email: "Hamdan@gmail.com" },
        { id: 3, name: "mohammed charif", email: "charif@gmail.com" },
        { id: 4, name: "khalid  riad", email: "riad@gmail.com" },
    ]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "AddUser":
            return { ...state, users: [...state.users, action.payload] }

        case "UpdateUser":
            const user = state.users.find((u) => u.id === parseInt(action.payload.id))
            if (user) {
                user.name = action.payload.name
                user.email = action.payload.email
            }
            return state;
        case "DeleteUser":
            return { ...state, users: [...state.users.filter((u) => u.id !== parseInt(action.payload))] }

        default:
            return state
    }
}

export default reducer;