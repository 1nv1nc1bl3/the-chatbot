import React from 'react';
import userAvatar from '../assets/user.png';
import robotAvatar from '../assets/robot.png';

export default function ChatMessage({ message, sender }) {
    return (
        <div className='flex flex-row gap-2 items-center'>
            {sender === 'robot' ? (
                <>
                    <img src={robotAvatar} alt='robot avatar' width='50' />
                    {message}
                </>
            ) : (
                <>
                    {message}
                    <img src={userAvatar} alt='user avatar' width='50' />
                </>
            )}
        </div>
    );
}
