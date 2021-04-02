import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './CountdownTimer.css';
import Button from '@material-ui/core/Button'

function CountdownTimer() {
    const [progress, setProgress] = useState(0);
    const [isTrue, setIsTrue] = useState(false);

    useEffect(() => {

        if (isTrue === true) {
               
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
            }, 1000);
            
            return () => {
                clearInterval(timer);
                //setIsTrue(false);
            };

        } else { setProgress(0)}
        
    }, [isTrue]);;
    
    return (
        <div className="countdown__timer">
            <div className="timer">
                <Box>
                    <CircularProgress variant="determinate" value={progress} className="timer__progress"/>
                    <Box className="timer__text">
                        <Typography variant="caption" component="div" color="textSecondary" align="center"><strong className="text">{progress/10 === 10 ? 'Cowntdown Over!' : progress/10}</strong></Typography>
                    </Box>
                </Box>
            </div>

            <div className="timer__buttons">
                <Button onClick={() => {
                    setIsTrue(true);
                }}><strong>Start</strong></Button>
                <Button onClick={() => setIsTrue(false)}><strong>Reset</strong></Button>
            </div>
        </div>
    )
}

export default CountdownTimer;
