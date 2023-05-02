// Define the type of User
export type User = {
    name: string
}

// Define the type of Chat
export type Chat = {
    data: string,
    user: User,
    timestamp: string
}

// Define the function that handles sending a message
function handleChatSend(action: any){
    return {
        data: action.data,
        timestamp: action.timestamp,
        user: action.user
    }
}

// Define the function that handles receiving a message
function handleChatRecieve(action: any){
    return {
        data: action.data,
        timestamp: action.timestamp,
        user: action.user
    }
}

// Define constants for the action types
export const ACTION_TYPES = {
    SEND_MESSAGE: 'send',
    RECIEVE_MESSAGE: 'recieve'
}

// Define the reducer function for the chat
export const ChatReducer = (state: Chat[], action: any) => {
    switch (action.type) {
        // If the action type is sending a message
        case ACTION_TYPES.SEND_MESSAGE:
            // Return a new state with the new message added to the end
            return [
            ...state,
            handleChatSend(action)
            ];
        // If the action type is receiving a message
        case ACTION_TYPES.RECIEVE_MESSAGE:
            // Return a new state with the new message added to the end
            return [
            ...state,
            handleChatRecieve(action)
            ];
        // If the action type is not recognized, return the current state
        default:
            return state
    }
}
