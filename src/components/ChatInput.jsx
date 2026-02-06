import React from 'react';

export default function ChatInput({ sendMessage }) {
    function buttonStyle() {
        const styles =
            'rounded-sm bg-[#318653] text-white px-6 py-2 h-12 cursor-pointer';

        return styles;
    }
    return (
        <div className='flex items-center gap-1'>
            <input
                className='border-1 rounded-sm px-6 py-2 h-12'
                type='text'
                placeholder='Send a message to Chatbot'
                size='30'
            />
            <button className={buttonStyle()}>Send</button>
            <button className={buttonStyle()} onClick={() => sendMessage()}>
                Send message
            </button>
        </div>
    );
}
