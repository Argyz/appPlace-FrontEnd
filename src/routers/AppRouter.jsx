import React,{useContext} from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { Users } from '../user/pages/Users';
import { NewPlaces } from '../places/pages/NewPlaces';
import { MainNavigation } from '../shared/components/Navigation/MainNavigation';
import { UserPlaces } from '../places/pages/UserPlaces';
import { UpdatePlace } from '../places/pages/UpdatePlace';
import { Auth } from '../user/pages/Auth';
import { AuthContext } from '../shared/context/auth-context';

export const AppRouter = () => {

    const auth=useContext(AuthContext);

    let routes;

    if (auth.isLoggedIn) {
        routes=(
            <Routes>
                <Route path='/' element={<Users />}/>
                <Route path='/:userId/places' element={<UserPlaces />}/>
                <Route path='/places/new' element={<NewPlaces />}/>
                <Route path='/places/:placeId' element={<UpdatePlace />} />
                <Route path='*' element={<Navigate to='/' raplace/>}/>
            </Routes>
        );
    }else{
        routes=(
            <Routes>
                <Route path='/' element={<Users />}/>
                <Route path='/:userId/places' element={<UserPlaces />}/>
                <Route path='/auth' element={<Auth />} />
                <Route path='*' element={<Navigate to='/auth' raplace/>}/>
            </Routes>
            
        );
    }
    return (
        <BrowserRouter>
            <MainNavigation />
            <main>
                {routes}
            </main>
        </BrowserRouter>

    )
}
