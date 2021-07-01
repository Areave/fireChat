const ChatMessage = ({text, author}) => {
  return (
    <div className={`message`}>
      <div className="author">{author}:</div>
      <div className="text">{text}</div>
    </div>
  );
};

export {ChatMessage};
