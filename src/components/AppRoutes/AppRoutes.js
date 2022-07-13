import { BrowserRouter } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { NavBasic } from '../NavBasic/NavBasic'
import { PublicRoutes } from './PublicRoutes'

export const AppRoutes = () =>{
    return(
            <BrowserRouter>
                <NavBasic/>
                <PublicRoutes/>
                <Footer/>
            </BrowserRouter>
    )
}