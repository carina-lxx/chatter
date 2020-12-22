import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CssBaseline from "@material-ui/core/CssBaseline";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    return (
        !isAuthenticated && (
            <CssBaseline>
                 <button onClick={() => loginWithRedirect()}>
            Log In
          </button>
            </CssBaseline>
         
        )
    )
}


export default LoginButton;