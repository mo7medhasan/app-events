"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useEventsContext } from "@/context/EventsContext";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import PopupUsers from "./components/PopupUsers"
import UserCard from "./components/UserCard";
export default function EventDetailsPage({ params }) {
  const { selectEvent, event } = useEventsContext();
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [users, setUsers] = useState();
  const router =useRouter()
  useEffect(() => {
    const fetchData = () => {
      const eventItem = selectEvent(params.id);
      setData(eventItem ? eventItem : event);
    };
    fetchData();
  }, [event, params.id, selectEvent]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://dummyjson.com/users?limit=5&skip=0&select=firstName,lastName,email`
      );
      const data = await response.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  useMemo(() => {
    if (data) {
      setDate(format(data?.create_at, "yyyy-MM-dd/h:m"));
    }
  }, [data]);
  return (
    <div className="pt-40 pb-6">
      <div className="bg-white max-w-6xl flex  flex-col gap-6 md:gap-8 w-[90%] mx-auto rounded-3xl p-4 md:p-8">
      <div className="flex border-b p-2">
      <button type="button" className="cursor-pointer font-medium " onClick={()=>router.back()}>
       ⨞ back
      </button>
        <h1 className="flex-1 font-bold text-gray-900 capitalize text-center text-3xl ">
          {data?.title}{" "}
        </h1></div>
        <div className="flex flex-wrap justify-between gap-6 text-gray-700 font-semibold text-lg capitalize text-center">
          <div className="">
            location <p className="text-black ">{data?.location}</p>
          </div>
          <div className="">
            duration <p className="text-black ">{data?.duration}</p>
          </div>
          <div className="">
            Date <p className="text-black ">{date}</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold  text-lg">Details :</h3>
          <p className="text-gray-600 font-medium">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eos
            soluta veniam sint voluptatem. Deleniti ipsa iure in similique nulla
            illum velit rem asperiores! Voluptas velit quasi culpa
            necessitatibus sequi.
          </p>
        </div>
        <div>
        <div className="flex ">
          <h3 className="font-bold  text-lg flex-1">Users Joined :</h3>
<PopupUsers/>
</div>
          <div className="flex flex-col divide-y-2 divide-gray-300 ">
            {users?.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
