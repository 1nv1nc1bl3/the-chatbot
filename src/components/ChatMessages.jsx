import ChatMessage from './ChatMessage';

export default function ChatMessages({ chatMessages, chatMessagesRef }) {
    return (
        <div
            className='chat-messages flex flex-col w-xl  gap-10 px-4 pb-6 overflow-y-scroll'
            ref={chatMessagesRef}
        >
            {chatMessages.map((item, index) => {
                const { message, sender } = item;
                return (
                    <ChatMessage
                        message={message}
                        sender={sender}
                        key={index}
                        chatMessages={chatMessages}
                    />
                );
            })}
        </div>
    );
}
