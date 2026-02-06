export default function ChatInput({ sendMessage, inputText, setInputText }) {
    function buttonStyle() {
        const styles =
            'rounded-sm bg-[#318653] text-white px-6 py-2 h-12 cursor-pointer';
        return styles;
    }

    return (
        <div className='flex items-center gap-1'>
            <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    e.key === 'Enter' && sendMessage();
                }}
                className='border-1 rounded-sm px-6 py-2 h-12 flex-1'
                type='text'
                placeholder='Send a message to Chatbot'
                size='30'
            />
            <button className={buttonStyle()} onClick={() => sendMessage()}>
                Send
            </button>
        </div>
    );
}
