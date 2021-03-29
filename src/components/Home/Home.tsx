import React from 'react';
import './Home.css';
import Box from '@material-ui/core/Box';
import Counter from './Counter/Counter';
import Countdown from './Countdown/Countdown';

function Home() {
    return (
        <div className="home">
            <Box>
                <Counter />
            </Box>

            <Box>
                <Countdown />
            </Box>
        </div>
    )
}

export default Home
