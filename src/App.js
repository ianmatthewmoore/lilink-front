import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing';
import Profile from './pages/profile/profile';
import Service from './pages/service-page/service-page';
import GigOrders from './pages/gig-order/gig-order';
import GigPageCreation from './pages/gig-creation/gig-page-creation';
import SettingsUser from './pages/settings-user/settings';
import GigNoteUser from './pages/gig-note/gig-note';
import EarningPage from './pages/earning-comp/earning-page';
import AllMyGig from './pages/all-gig/allGig';
import MessagePage from './pages/messanger/message';
import {

  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { getUserById } from './api/user';
import { useEffect } from 'react';

import { Provider, useDispatch } from 'react-redux'
import { fetchUserById } from './redux/user';
import UpdateGigPage from './pages/update-gig/update-gig';
import { socket } from './utils/socket';
import HomePage from './pages/home-comp/home-comp';
import Toast from './components/toster/toast';
import SearchPage from './pages/home-seach/home-search';
import { Stripe } from './components/pay/stripeContainer';

const queryClient = new QueryClient()

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUserById())
    socket.on('connect', ()=>{
      if(localStorage.getItem('token'))
        socket.emit('new user',localStorage.getItem('token'))
        socket.on('online user ',(data)=>{
          console.log(data);
        })
    });
  },[])
  

  return (
      <QueryClientProvider client={queryClient}>
        <Toast></Toast>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LandingPage />}/>

              <Route path='/profile/:id' element={<Profile />}/>
              <Route path='/service/:id' element={<Service />}/>
              <Route path='/gig-active' element={<GigOrders />}/>
              <Route path='/gig-creation' element={<GigPageCreation />}/>
              <Route path='/gig-update/:id' element={<UpdateGigPage />}/>
              <Route path='/settings-account' element={<SettingsUser />}/>
              <Route path='/order/:id' element={<GigNoteUser />}/>
              <Route path='/earning' element={<EarningPage />}/>
              <Route path='/myGig' element={<AllMyGig />}/>
              <Route path='/myGig' element={<AllMyGig />}/>
              <Route path='/search/:id' element={<SearchPage />}/>
              <Route path='/message' element={<MessagePage />}/>
              <Route path='/message/:id' element={<MessagePage />}/>
              <Route path='/home' element={<HomePage />}/>
              <Route path='/stripe' element={<Stripe />}/>
            </Routes>
          </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;

