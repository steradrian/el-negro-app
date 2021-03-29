import React from 'react';
import './Countdown.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import clock from './clock.svg';
import CountdownTimer from './CountdownTimer/CountdownTimer'

function Countdown() {
    return (
        <Card className="countdown">
            <div className="countdown__header">
                <img src={clock} alt="" />
                <Typography variant="h4">
                    Countdown 
                </Typography>

                <CountdownTimer/>
            </div>
            
        </Card>
    )
}

export default Countdown
