import React,{useState, useCallback} from 'react'
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './shared/context/auth-context';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login=useCallback(()=>{
        setIsLoggedIn(true);
    },[]);

    const logout = useCallback(()=>{
        setIsLoggedIn(false);
    },[]);

    return(
        <AuthContext.Provider 
            value={
                {
                    isLoggedIn,
                    login,
                    logout
                }
            }>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default App;