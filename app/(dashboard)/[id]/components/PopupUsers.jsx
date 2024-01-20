
import { Modal, Pagination } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

export default function PopupUsers() {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setPage] = useState(1);
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      let skip = (activePage - 1) * 5;
      const response = await fetch(
        `https://dummyjson.com/users?limit=5&skip=${skip}&select=firstName,lastName,email`
      );
      const data = await response.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, [activePage]);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Users Joined" radius={"lg"}>
        <div className="flex flex-col divide-y-2 divide-gray-300  py-8">
          {users?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>{" "}
        <Pagination
          total={20}
          color="gray"
          radius="md"
          siblings={1} 
          boundaries={1}
          value={activePage}
          onChange={setPage}
          
        />
      </Modal>

      <button onClick={open} className="font-medium text-lg">
        See More ⪢
      </button>
    </>
  );
}
