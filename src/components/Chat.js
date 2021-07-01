import {ChatMessage} from './ChatMessage';

const Chat = ({messages, refer}) => {
  return (
    <>
      <div className="messages">
        {messages &&
          messages
            .map((message) => {
              return (
                <ChatMessage
                  key={message.id}
                  text={message.message}
                  author={message.author}
                />
              );
            })
            .reverse()}
        <div ref={refer}></div>
      </div>
    </>
  );
};

export {Chat};
