import React from 'react';
import Tasks from '../components/tasks/Tasks'
import AppBar from '../components/AppBar'

function Home(props) {
    return (
        <>
            <AppBar/>
            <Tasks/>
        </>
    );
}

export default Home;