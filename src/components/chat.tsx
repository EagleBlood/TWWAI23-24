import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface Message {
   username: string;
   message: string;
}

const ChatComponent: React.FC = () => {

    
   const [username, setUsername] = useState('');
   const [room, setRoom] = useState('');
   const [message, setMessage] = useState('');
   const [messageList, setMessageList] = useState<Message[]>([]);
   const [isJoined, setIsJoined] = useState(false);
   const [socket, setSocket] = useState<Socket | null>(null);

   useEffect(() => {
    if (isJoined && socket) {
        const handleReceiveMessage = (data: Message) => {
            setMessageList((prevMessages) => [...prevMessages, data]);
        };

        const handleUserJoined = (data: Message) => {
            setMessageList((prevMessages) => [...prevMessages, data]);
        };

        const handleUserLeft = (data: Message) => {
            setMessageList((prevMessages) => [...prevMessages, data]);
        };

        const handleDisconnect = () => {
            console.log('Disconnected from server');
        };

        socket.on('receiveMessage', handleReceiveMessage);
        socket.on('userJoined', handleUserJoined);
        socket.on('userLeft', handleUserLeft);
        socket.on('disconnect', handleDisconnect);

        return () => {
            console.log('useEffect Cleanup - Component Will Unmount');

            socket.off('receiveMessage', handleReceiveMessage);
            socket.off('userJoined', handleUserJoined);
            socket.off('userLeft', handleUserLeft);
            socket.off('disconnect', handleDisconnect);
        };
    }
}, [isJoined, socket]);

   const joinRoom = (event: React.FormEvent) => {
       event.preventDefault();
       const newSocket = io('http://localhost:3100');
       newSocket.emit('joinRoom', { username, room });
       setSocket(newSocket);
       setIsJoined(true);
   };

   const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (socket) {
        await socket.emit('sendMessage', { username, room, message});
        setMessage('');
    }
};

const renderMessage = (msg: Message, index: number) => {
    const isMyMessage = msg.username === username;
    const usernameText: React.CSSProperties = {
        fontWeight: 'bold',
        color: 'black',
    };

    const messageStyle: React.CSSProperties = {
        color: 'black',
        backgroundColor: isMyMessage ? '#485cad90' : '#48ac3d90',
        borderRadius: '10px',
        padding: '10px',
        margin: '15px',
    };

    const box: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: isMyMessage ? 'row-reverse' : 'row',
    };

    return (
        <div style={box}>
            <li key={index} style={messageStyle}>
                <span style={usernameText}>{msg.username}</span>: {msg.message}
            </li>
        </div>
    );
};


return (
    <div className="chat-container">
        <h1>Chat</h1>
        {isJoined ? (
            <div>
                <h2>Room: {room}</h2> {/* Display the room name here */}
                <div>
                    <label htmlFor="messageInput">Message:</label>
                    <input
                        type="text"
                        id="messageInput"
                        placeholder="Type your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {messageList.map((msg, index) => renderMessage(msg, index))}
                </ul>
            </div>
        ) : (
            <div>
                <label htmlFor="usernameInput">Your Name:</label>
                <input
                    type="text"
                    id="usernameInput"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="roomInput">Room:</label>
                <input
                    type="text"
                    id="roomInput"
                    placeholder="Enter room name"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <button onClick={joinRoom}>Join Room</button>
            </div>
        )}
    </div>
);
};

export default ChatComponent;


