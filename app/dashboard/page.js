"use client"

import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

const Dashboard = () => {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme('system');
    }, []);

    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;