import ChatArea from "components/chat";
import UserInput from "components/inputSpace";
import Layout from "components/layout";
import { ChatProvider } from "contexts/chatContext";

export default function UserLobby() {

    return(
        <>
        <Layout>
        <ChatProvider>
            <ChatArea />
            <UserInput />
        </ChatProvider>
        </Layout> 
        </>

    )
}