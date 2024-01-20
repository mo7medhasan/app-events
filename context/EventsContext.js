"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { createCookies } from "@/app/actions";
export const EventsContext = createContext();

export const useEventsContext = () => {
  return useContext(EventsContext);
};
export const EventsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);

  const [joinedUsers, setJoinedUsers] = useState([]);
  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(
        "https://mocki.io/v1/5acb637a-f8da-490f-83b7-d598ee90cf4c"
      );
      const fetchedEvent = await response.json();
      setEvents(fetchedEvent);
    };
    fetchEvent();
  }, []);
  useEffect(() => {
    setEvent(events.find((eve) => eve.id == 1));
  }, [events]);
  const fetchUser = async () => {
    setUser(fetchedUserData);
  };
  const LogInUser = async (data) => {
    const { email, password } = data;
    setUser(email);

    const cookiesList = await createCookies(email);
    return cookiesList;
  };

  function selectEvent(id) {
    let result = events.find((eve) => eve.id == id);
    setEvent(result);
    return result;
  }

  return (
    <EventsContext.Provider
      value={{
        user,
        events,
        event,
        setEvent,
        joinedUsers,
        fetchUser,
        LogInUser,
        selectEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
