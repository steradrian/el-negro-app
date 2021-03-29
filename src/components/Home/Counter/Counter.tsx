import React, { useState } from 'react';
import './Counter.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import math from './math.svg';
import Button from '@material-ui/core/Button';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <Card className="counter">
            <div className="counter__header">
                <img src={math} alt="" />
                <Typography variant="h4">
                    Counter
                </Typography>
            </div>

            <div className="counter__body">
                <Typography variant="h5">
                    The count is
                    <strong className={`
                        ${count === 0 ? 'count__zero' : ''}
                        ${count > 0 ? 'count__positive' : ''}
                        ${count < 0 ? 'count__negative' : ''}
                        `}>{" "}{count}</strong>
                </Typography>
                <div className="counter__bodyButtons">
                    <Button className="increment" onClick={() => setCount(count+1)}>Increment</Button>
                    <Button className="decrement" onClick={() => setCount(count-1)}>Decrement</Button>
                </div>
            </div>
        </Card>            
    )
}

export default Counter
