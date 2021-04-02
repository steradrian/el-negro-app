import React from 'react';
import './Header.css';
import elnegrologo from './elnegrologo.png';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { matchPath, useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    const match = matchPath("/", {
        path: "/",
        exact: true,
        strict: false
    });
    console.log(match);
    return (
        <div className="header">
            <div className="header__left">
                <img src={elnegrologo} alt="logo"/>
            </div>

            <div className="header__right">
                
                <Typography variant="h5" onClick={() => history.push('/')} className={`header__link ${match ? "active" : ""}`}>
                        <strong>Home</strong>
                    </Typography>
                
                    <Typography variant="h5" onClick={() => history.push('/users')} className={`header__link ${!match ? "active" : ""}`}>
                        <strong>Users</strong>
                    </Typography>
            </div>
        </div>
    )
}

export default Header;
