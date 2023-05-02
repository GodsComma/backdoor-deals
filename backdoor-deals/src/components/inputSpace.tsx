/* eslint-disable */ // Disables eslint rules for this file
import { useChatInteraction } from "contexts/chatContext"; // Imports the `useChatInteraction` hook from the "chatContext" module
import { ACTION_TYPES, Chat } from "contexts/chatReducer"; // Imports the "ACTION_TYPES" and "Chat" types from the "chatReducer" module
import { useState, createRef, useEffect } from "react"; // Imports the `useState`, `createRef`, and `useEffect` hooks from the "react" module

// Exports a component named "UserInput" as the default export
export default function UserInput() {
    const [currentMessage, setCurrentMsg] = useState(''); // Defines a state variable named "currentMessage" and its setter function "setCurrentMsg", initialized to an empty string
    const dispatch = useChatInteraction(); // Calls the `useChatInteraction` hook and assigns its return value to the "dispatch" constant
    const textInput = createRef<HTMLInputElement>(); // Defines a ref named "textInput" using the `createRef` function from "react"

    // Defines a function named "textInputFocus" that focuses the "textInput" ref
    function textInputFocus() {
        function focus() { // Defines a nested "focus" function
            const node = textInput.current; // Gets the current value of the "textInput" ref
            if (node) { // If it exists
                node.focus() // Focuses on it
            }
        }
        focus(); // Calls the "focus" function
    }

    // Defines a function named "handleChat" that sends a message and clears the input field
    function handleChat() {
        const tempChat: Chat = { // Defines a temporary "Chat" object
            data: currentMessage, // Sets its "data" property to the current message
            timestamp: Date.now().toString(), // Sets its "timestamp" property to the current timestamp
            user: { // Sets its "user" property to an object with a "name" property
                name: 'Sulav'
            }
        }
        if (dispatch){ // If the "dispatch" function exists
            dispatch({ // Dispatches an action object to the chat reducer
                type: ACTION_TYPES.SEND_MESSAGE, // Sets its "type" property to "SEND_MESSAGE"
                ...tempChat // Includes the properties of the "tempChat" object
            })
        }
        if (textInput.current) { // If the "textInput" ref exists
            textInput.current.value = ''; // Clears its value
        }
        return 0; // Returns a value of 0
    }

    // Defines a function named "handleKey" that calls "handleChat" when the Enter key is pressed
    function handleKey(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") { // If the pressed key is Enter
            handleChat(); // Calls the "handleChat" function
        }

    }

    // Defines an effect that calls the "textInputFocus" function when the component mounts or updates
    useEffect(() => {
        textInputFocus(); // Calls the "textInputFocus" function
    })

    // Renders the component
    return (
        <div className="absolute inset-x-0 bottom-0 p-16 bg-stone-900">
            <div className="relative ">
                <span className="absolute inset-y-0 items-center">
                    <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-stone-500  hover:cursor-not-
