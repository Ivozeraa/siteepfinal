import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export function DefaultLayout(){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}