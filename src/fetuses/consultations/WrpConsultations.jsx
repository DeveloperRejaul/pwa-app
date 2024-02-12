import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import AdmConsulation from './AdmConsulation';
import UsrConsultations from './UsrConsultations';

export default function WrpConsultations() {
    const { user } = useAppContext();

    if (user?.role === 'admin') return <AdmConsulation />
    else return <UsrConsultations />
}
