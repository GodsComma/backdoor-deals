import { createRef, useEffect } from "react";
import {UserMessage, NotUserMessage} from "./messages";
import { useChat } from "contexts/chatContext";


export default function ChatArea() {
    const chat  = useChat();
    const messagesEndRef = createRef<HTMLDivElement>();

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
    })



    return(
        <div className="overflow-y-scroll p-10 max-h-[750px] min-h-[750px]">
                {
                    chat.map((data, index) => {
                        if(index % 2 != 0)
                            return(
                                <div key={index}>
                                    <UserMessage data={data.data} user={{name: 'Sulav'}} timestamp={data.timestamp}/>
                                    <br/>
                                </div>
                            );
                        return(
                            <div key={index}>
                                <NotUserMessage data={data.data} user={{name: 'Sulav'}} timestamp={data.timestamp}/>
                                <br/>
                            </div>
                            
                        );
                    })
                }
                <div ref={messagesEndRef} />
        </div>
    );
}