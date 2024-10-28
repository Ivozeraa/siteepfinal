import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Informatica } from './Pages/Informatica';
import { Eletro } from './Pages/Eletro';
import { Adm } from './Pages/Adm';
import { Enfer } from './Pages/Enfer';
import { DefaultLayout } from './Layouts/DefaultLayout';
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Login/Register'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path='/adm' element={<Adm />}/>
                <Route path='/enfer' element={<Enfer />}/>
                <Route path='/eletro' element={<Eletro />}/>
                <Route path='/informatica' element={<Informatica />}/>
                      
            </Route>

        </Routes>

    );
}

