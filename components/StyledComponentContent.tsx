'use client'
import React, { useEffect } from 'react';

const StyledComponentContent = () => {

    useEffect(() => {
        console.log("StyledComponentContent Mounted");

        return () => {
            console.log("StyledComponentContent Unmounted");
        }
    }, [])

    return (
        <div>
        </div>
    );
};

export default StyledComponentContent;