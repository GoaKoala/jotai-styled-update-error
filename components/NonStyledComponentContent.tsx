'use client'
import React, { useEffect } from 'react';

const StyledComponentContent = () => {

    useEffect(() => {
        console.log("NonStyledComponentContent Mounted");

        return () => {
            console.log("NonStyledComponentContent Unmounted");
        }

    }, [])

    return (
        <div>
        </div>
    );
};

export default StyledComponentContent;