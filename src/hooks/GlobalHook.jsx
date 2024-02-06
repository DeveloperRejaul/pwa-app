import React, { useState } from 'react';
import usrData from '../db/User.json';

export default function GlobalHook() {
    const [user, setUser] = useState(usrData);

    return {
        user,
        setUser,
    }
}
