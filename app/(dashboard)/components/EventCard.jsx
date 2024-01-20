import { format } from "date-fns";
import Link from "next/link";

export default function EventCard({ event }) {
  const formattedDate = format(event.create_at, "yyyy-MM-dd/h:m");

  return (
    <Link href={`/${event.id}`}  className=" w-full max-w-80 p-4 bg-white shadow rounded-lg space-y-4">
      <div className=" flex gap-3">
        <h2 className="font-bold text-2xl flex-1">{event?.title}</h2>
        <p className="text-gray-700 font-semibold">{event?.duration}</p>
      </div>
      <div className=" flex gap-3 justify-between">
        <p className="text-gray-700 font-semibold">{event?.location}</p>
        <p className="text-[#666] text-sm"> {formattedDate}</p>
      </div>
    </Link>
  );
}
