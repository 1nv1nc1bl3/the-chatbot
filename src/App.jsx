import { useState } from 'react';
// import { allMessages } from './data';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

export default function App() {
    const [chatMessages, setChatMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    function sendMessage() {
        const newMessage = {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
        };
        const updatedMessages = [...chatMessages, newMessage];
        setChatMessages(updatedMessages);

        const response = window.Chatbot.getResponse(inputText);
        const newRobotMessage = {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID(),
        };
        setInterval(
            setChatMessages([...updatedMessages, newRobotMessage]),
            3500,
        );
        setInputText('');
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-start bg-blue-50 pt-20 gap-10'>
            <h1 className='text-2xl font-bold text-center'>
                Welcome to the Chatbot Project! Send a message using the textbox
                below.
            </h1>
            <h2 className='text-lg'>How can I help? Ask anything you want</h2>
            <div className='chat-input w-xl'>
                <ChatInput
                    sendMessage={sendMessage}
                    inputText={inputText}
                    setInputText={setInputText}
                />
            </div>
            <div className='chat-messages flex flex-col w-xl gap-8'>
                {chatMessages.map((item, index) => {
                    const { message, sender } = item;
                    return (
                        <ChatMessage
                            message={message}
                            sender={sender}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}
