export type User = {
    name: String
}

export type Chat = {
    data: string,
    user: User,
    timestamp: string
}


function handleChatSend(action: any){
    return {
        data: action.data,
        timestamp: action.timestamp,
        user: action.user
    }
}

function handleChatRecieve(action: any){
    return {
        data: action.data,
        timestamp: action.timestamp,
        user: action.user
    }
}

export const ACTION_TYPES = {
    SEND_MESSAGE: 'send',
    RECIEVE_MESSAGE: 'recieve'
}

export const ChatReducer = (state: Chat[], action: any) => {
    switch (action.type) {
        case ACTION_TYPES.SEND_MESSAGE:
            return [
            ...state,
            handleChatSend(action)
            ];
        case ACTION_TYPES.RECIEVE_MESSAGE:
            return [
            ...state,
            handleChatRecieve(action)
            ];
        default:
            return state
    }
}