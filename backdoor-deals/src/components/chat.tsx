import { createRef, useEffect } from "react";
import { UserMessage, NotUserMessage } from "./messages";
import { useChat } from "contexts/chatContext";

// Define the ChatArea component
export default function ChatArea() {
  // Get the chat data from the chat context
  const chat = useChat();

  // Create a ref to the div that will be scrolled to the bottom
  const messagesEndRef = createRef<HTMLDivElement>();

  // Use an useEffect hook to automatically scroll to the bottom of the chat area
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  // Render the chat area
  return (
    <div className="overflow-y-scroll p-10 max-h-[750px] min-h-[750px]">
      {/* Map over the chat data to generate chat messages */}
      {chat.map((data, index) => {
        // If the message was sent by the current user, render a UserMessage component
        if (index % 2 != 0)
          return (
            <div key={index}>
              <UserMessage
                data={data.data}
                user={{ name: "Sulav" }}
                timestamp={data.timestamp}
              />
              <br />
            </div>
          );
        // Otherwise, render a NotUserMessage component
        return (
          <div key={index}>
            <NotUserMessage
              data={data.data}
              user={{ name: "Sulav" }}
              timestamp={data.timestamp}
            />
            <br />
          </div>
        );
      })}
      {/* Add a div that will be scrolled to the bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
}
