import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './styles.css';
import AutoComplete from '../autocomplete'


const page = (props) => {
    const { 
        text,
        suggestions,
        onChangeText,
        onChangeSelection
    } = props
    console.log('props', props)
    return (
        
        <AppBar position='static'>
            <Toolbar className='appbar'>
                <Typography>
                    Xseiver
                </Typography>

                <AutoComplete 
                text={text}
                suggestions={suggestions}
                onChangeText={onChangeText}
                onChangeSelection={onChangeSelection}
                />

                <AccountCircle />
            </Toolbar>
        </AppBar>
    );
};

export default page;