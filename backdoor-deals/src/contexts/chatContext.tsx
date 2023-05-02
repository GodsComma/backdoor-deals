// Disable eslint rules for this file
/* eslint-disable */

// Import React functions for creating and managing contexts and reducers
import { createContext, useContext, useReducer } from 'react';

// Import Chat and ChatReducer interfaces from chatReducer file
import { Chat, ChatReducer } from './chatReducer';

// Create initial chat state with empty array of chats
const initialChat: Chat[] = [];

// Create ChatContext with initialChat state as default value
export const ChatContext = createContext(initialChat);

// Create ChatInteractionContext with null as default value
const ChatInteractionContext = createContext(null);

// Define ChatProvider component that accepts children as props
export function ChatProvider({ children }: any) {
    // Use useReducer hook to manage state and actions for chat
    const [ chat, dispatch ] = useReducer(
        ChatReducer, // Pass in ChatReducer function to handle actions and update state
        initialChat, // Pass in initialChat as default state
    )
    // Return ChatContext and ChatInteractionContext Providers wrapping children components
    return (
        <ChatContext.Provider value={chat}>
            <ChatInteractionContext.Provider value={dispatch}>
                {children}
            </ChatInteractionContext.Provider>
        </ChatContext.Provider>
    )
}

// Define useChat hook to access ChatContext value
export function useChat(){
    return useContext(ChatContext);
}

// Define useChatInteraction hook to access ChatInteractionContext value
export function useChatInteraction(){
    return useContext(ChatInteractionContext);
}
