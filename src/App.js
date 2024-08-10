import React from 'react';
import Header from './components/Header';
import ContentBlock from './components/ContentBlock';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <ContentBlock 
                title="Welcome to My Blog" 
                content="This is a simple blog built with React and PHP. Here you can find various articles and posts." 
            />
            <ContentBlock 
                title="About Me" 
                content="I am a web developer with a passion for creating interactive and dynamic web applications." 
            />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
