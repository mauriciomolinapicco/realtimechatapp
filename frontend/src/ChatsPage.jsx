import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    //useMultiChatLogic(projetcId, username, secret)
    const chatProps = useMultiChatLogic(
        '610869b1-d2a9-4c04-adc2-5f371c2dcd90', 
        props.user.username, 
        props.user.secret);
    return <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
}

export default ChatsPage