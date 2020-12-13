import React from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { useLocation, Redirect } from 'react-router-dom'

const Login = () => {

    const { keycloak } = useKeycloak()
    const location = useLocation()
    const currentLocationState = location.state || {
        from: { pathname: '/dashboard' }
    }

    const login = React.useCallback(() => {
        keycloak?.login()
    }, [keycloak])

    if (keycloak?.authenticated) {
        return <Redirect to={currentLocationState?.from as string} />
    }

    return (
        <div>
            <p>This is Login Page</p>
            <button type="button" onClick={login}>Login</button>
        </div>
    )
}

export default Login