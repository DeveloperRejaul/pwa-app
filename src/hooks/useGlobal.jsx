import React, { useState } from 'react';
import usrData from '../db/User.json';

export default function useGlobal() {
    const [user, setUser] = useState(usrData);

    return { user, setUser }
}
