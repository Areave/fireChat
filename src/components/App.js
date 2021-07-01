import firebase from 'firebase/app';
import 'firebase/firestore';
import {useState, useRef} from 'react';

import {useCollectionData} from 'react-firebase-hooks/firestore';

import {Chat} from './Chat';
import {SendForm} from './SendForm';

firebase.initializeApp({
  apiKey: 'AIzaSyC1AzmWQZm2NkbGh-CnVfkWLfFZYw3MhLM',
  authDomain: 'chat-4af78.firebaseapp.com',
  projectId: 'chat-4af78',
  storageBucket: 'chat-4af78.appspot.com',
  messagingSenderId: '128689224222',
  appId: '1:128689224222:web:8247c196be0e9bddab8c0f',
});

const firestore = firebase.firestore();

const App = () => {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createAt', 'desc').limit(20);
  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');
  const [formLogin, setFormLogin] = useState('anon');
  const refer = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      message: formValue,
      author: formLogin,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setFormValue('');
    refer.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="app">
      <h1 className="header"> My FireChat</h1>
      <section className="main">
        <Chat messages={messages} refer={refer} />

        <SendForm
          formValue={formValue}
          setFormValue={setFormValue}
          formLogin={formLogin}
          setFormLogin={setFormLogin}
          sendMessage={sendMessage}
        />
      </section>
    </div>
  );
};

export {App};
