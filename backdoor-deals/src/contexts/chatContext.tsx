/* eslint-disable */
import { createContext, useContext, useReducer } from 'react';
import { Chat, ChatReducer } from './chatReducer';


const initialChat: Chat[] = [];

export const ChatContext = createContext(initialChat);

const ChatInteractionContext = createContext(null);

export function ChatProvider({ children }: any) {
    const [ chat, dispatch ] = useReducer(
        ChatReducer,
        initialChat,
    )
    return (
        <ChatContext.Provider value={chat}>
            <ChatInteractionContext.Provider value={dispatch}>
                {children}
            </ChatInteractionContext.Provider>
        </ChatContext.Provider>
    )
}

export function useChat(){
    return useContext(ChatContext);
}

export function useChatInteraction(){
    return useContext(ChatInteractionContext);
}