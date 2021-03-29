import React from 'react';
import './Header.css';
import elnegrologo from './elnegrologo.png';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    return (
        <div className="header">
            <div className="header__left">
                <img src={elnegrologo} alt="logo"/>
            </div>

            <div className="header__right">
                <IconButton onClick={() => history.push('/')}>
                    <Typography variant="h5">
                        Home
                    </Typography>
                </IconButton>

                <IconButton onClick={() => history.push('/users')}>
                    <Typography variant="h5">
                        Users
                    </Typography>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
