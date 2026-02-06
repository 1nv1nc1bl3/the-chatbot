import React from 'react';
import userAvatar from '../assets/user.png';
import robotAvatar from '../assets/robot.png';

export default function ChatMessage({ message, sender }) {
    const messagesStyle = () => {
        return `bg-gray-200 px-10 py-3 rounded-lg text-slate-800 text-lg`;
    };

    return (
        <div
            className={`flex flex-row gap-2 items-end ${sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
            {sender === 'robot' ? (
                <>
                    <img src={robotAvatar} alt='robot avatar' width='50' />
                    <span className={messagesStyle()}>{message}</span>
                </>
            ) : (
                <>
                    <span className={messagesStyle()}>{message}</span>
                    <img src={userAvatar} alt='user avatar' width='50' />
                </>
            )}
        </div>
    );
}
