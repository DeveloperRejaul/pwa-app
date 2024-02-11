import React from 'react'
import useGlobal from '../../hooks/useGlobal'
import { useAppContext } from '../../hooks/useAppContext'
import UserConsultations from './UserConsultations'
import AdminConsolation from './AdminConsulation'

const components = {
    "user": <UserConsultations />,
    "admin": <AdminConsolation />

}

function Index() {
    const { user } = useAppContext()
    return components[user.role]
}

export default Index