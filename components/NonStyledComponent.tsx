'use client'
import { AppBar, styled } from '@mui/material';
import React, { useEffect } from 'react';
import NonStyledComponentContent from './NonStyledComponentContent';


const NonStyledComponent= () => {

    useEffect(() => {
        console.log("NonStyledComponent Mounted");
    }, [])

    return (
        <AppBar>
            <NonStyledComponentContent></NonStyledComponentContent>
        </AppBar>
    );
};

export default NonStyledComponent;