import { useState } from 'react';
import { allMessages } from './data';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

export default function App() {
    const [chatMessages, setChatMessages] = useState(allMessages);

    function sendMessage() {
        const newMessage = {
            message: 'test',
            sender: 'user',
            id: crypto.randomUUID(),
        };
        setChatMessages([...chatMessages, newMessage]);
        console.log(newMessage);
        console.log(allMessages);
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-start bg-blue-100 pt-20 gap-10'>
            <ChatInput sendMessage={sendMessage} />
            {chatMessages.map((item) => {
                const { message, sender } = item;
                return (
                    <ChatMessage
                        message={message}
                        sender={sender}
                        key={crypto.randomUUID()}
                    />
                );
            })}
        </div>
    );
}
