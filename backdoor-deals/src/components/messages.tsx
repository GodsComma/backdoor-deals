import { Chat } from "contexts/chatReducer"

export const UserMessage = ({data}: Chat) => {
    return(
        <div className="chat-message">
        <div className="flex items-end justify-end">
           <div className="flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{data}</span></div>
           </div>
           <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2" />
        </div>
     </div>
    )
}

export const NotUserMessage = ({data}: Chat) => {
    return(
        <div className="chat-message">
        <div className="flex items-end justify-start">
           <div className="flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-green-400 text-black ">{data}</span></div>
           </div>
           <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1" />
        </div>
     </div>
    )
}