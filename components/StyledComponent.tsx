'use client'
import { AppBar, styled } from '@mui/material';
import React, { useEffect } from 'react';
import StyledComponentContent from './StyledComponentContent';


const StyledComponent= () => {

    useEffect(() => {
        console.log("StyledComponent Mounted");
    }, [])

    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        boxShadow: 'none',
        background: theme.palette.background.paper,
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        [theme.breakpoints.up('lg')]: {
          minHeight: '70px',
        },
      }));

    return (
        <AppBarStyled>
            <StyledComponentContent></StyledComponentContent>
        </AppBarStyled>
    );
};

export default StyledComponent;