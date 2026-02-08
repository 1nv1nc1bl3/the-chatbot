export default function SwitchButton({
    isButtonOn,
    setIsButtonOn,
    setChatMessages,
}) {
    return (
        <div className='switch-button absolute right-0 top-0 p-4'>
            <button
                className={`text-white w-15 h-8 rounded-lg cursor-pointer ${isButtonOn ? 'bg-[#318653]' : 'bg-[#dc3545]'}`}
                onClick={() => {
                    setIsButtonOn((prev) => !prev);
                    setChatMessages([]);
                }}
            >
                {isButtonOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}
