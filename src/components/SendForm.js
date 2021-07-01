const SendForm = ({formValue, setFormValue, sendMessage, formLogin, setFormLogin}) => {
  return (
    <>
      <form className="sendForm" onSubmit={sendMessage}>
        <input className="author" type="text" value={formLogin} onChange={(e)=>{setFormLogin(e.target.value)}}/>
        <input placeholder="youre message" className="text" type="text" value={formValue} onChange={(e)=>{setFormValue(e.target.value)}}/>
        <button type="submit">Send message</button>
      </form>
    </>
  );
};

export {SendForm};
