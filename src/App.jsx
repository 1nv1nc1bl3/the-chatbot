import { useState, useEffect, useRef } from 'react';
// import { allMessages } from './data';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import Heading from './components/Heading';
import SwitchButton from './components/SwitchButton';

export default function App() {
    // states, hooks
    const [chatMessages, setChatMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    // const [isButtonOn, setIsButtonOn] = useState(true);

    const chatMessagesRef = useRef(null);
    useEffect(() => {
        const containerElement = chatMessagesRef.current;
        if (containerElement) {
            containerElement.scrollTop = containerElement.scrollHeight;
        }
    }, [chatMessages]);

    // functions
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
        <div className='font-poppins min-h-screen flex flex-col items-center justify-between bg-blue-50 pt-20 gap-10'>
            <div className='flex flex-col gap-20 justify-start grow items-center'>
                {/* <SwitchButton
                    isButtonOn={isButtonOn}
                    setIsButtonOn={setIsButtonOn}
                    setChatMessages={setChatMessages}
                /> */}
                <Heading />
                <ChatMessages
                    chatMessages={chatMessages}
                    chatMessagesRef={chatMessagesRef}
                />
            </div>
            <ChatInput
                sendMessage={sendMessage}
                inputText={inputText}
                setInputText={setInputText}
                chatMessages={chatMessages}
            />
        </div>
    );
}
