"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

import {createCookies} from '@/app/actions'
export const EventsContext = createContext();

export const useEventsContext = () => {
    return useContext(EventsContext);
  };
export const EventsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [joinedUsers, setJoinedUsers] = useState([]);

  useEffect(() => {
   
  }, [user])
  
  const fetchUser = async () => {
    setUser(fetchedUserData);
  };
  const LogInUser=async (data)=>{
const {email,password}= data
setUser(email)  

const cookiesList =await createCookies(email)
return cookiesList
}


  return (
    <EventsContext.Provider value={{ user, events, joinedUsers, fetchUser,LogInUser }}>
      {children}
    </EventsContext.Provider>
  );
};