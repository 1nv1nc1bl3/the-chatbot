import { useState, useEffect } from 'react';
import userAvatar from '../assets/user.png';
import robotAvatar from '../assets/robot.png';
import spinner from '../assets/loading-spinner.gif';

export default function ChatMessage({ message, sender, chatMessages }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loader = async () => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        };
        loader();
    }, [chatMessages]);

    const messagesStyle = () => {
        return `bg-gray-200 px-10 py-3 rounded-lg text-slate-800 text-lg`;
    };

    return (
        <div
            className={`flex flex-row gap-4 items-start ${sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
            {sender === 'robot' ? (
                <>
                    <img
                        src={robotAvatar}
                        alt='robot avatar'
                        className='w-15'
                    />
                    <span className={messagesStyle()}>
                        {isLoading ? (
                            <img
                                style={{ height: '45px' }}
                                src={spinner}
                                alt='Spinner Icon'
                            />
                        ) : (
                            message
                        )}
                    </span>
                </>
            ) : (
                <>
                    <span className={messagesStyle()}>{message}</span>
                    <img src={userAvatar} alt='user avatar' className='w-15' />
                </>
            )}
        </div>
    );
}
