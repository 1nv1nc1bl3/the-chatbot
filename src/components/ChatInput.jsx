export default function ChatInput({
    sendMessage,
    inputText,
    setInputText,
    chatMessages,
}) {
    const buttonStyle = () => {
        return 'rounded-sm bg-[#318653] hover:bg-[#90a1b9] transition duration-300 text-white px-6 py-2 h-12 cursor-pointer';
    };

    return (
        <div className='flex flex-col justify-center items-center gap-8 mb-20'>
            <div className='chat-input flex items-center w-xl gap-1'>
                <input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                        e.key === 'Enter' && inputText && sendMessage();
                    }}
                    className='border-1 rounded-sm px-6 py-2 h-12 flex-1 focus:outline-hidden'
                    type='text'
                    placeholder='Send a message to Chatbot'
                    size='30'
                />
                <button
                    className={buttonStyle()}
                    onClick={() => inputText && sendMessage()}
                >
                    Send
                </button>
            </div>
            {chatMessages.length === 0 && (
                <h2 className='text-lg'>
                    How can I help? Ask anything you want
                </h2>
            )}
        </div>
    );
}
