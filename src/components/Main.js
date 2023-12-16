import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { addUser } from '../Store/userSlice';
import { useDispatch } from 'react-redux'

const Main = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        let user = localStorage.getItem('user');
        if(user){
            dispatch(addUser(user));
          
        }
    },[])
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}
export default Main;