import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';


const App = ()=>{
     if(!localStorage.getItem('username')) return <LoginForm />


    return(
        <ChatEngine 
         height="100vh"
         projectID="675e9989-1a4a-4b24-93f5-6f15a7fb9cdb"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
        
    );
}

export default App;