import dynamic from 'next/dynamic'

const EventCard = dynamic(() => import('./components/EventCard'))


export default async function Home() {
  const response = await fetch(
    "https://mocki.io/v1/5acb637a-f8da-490f-83b7-d598ee90cf4c"
  );
  const data = await response.json();
  return (
    <main className="flex  justify-center pb-14 px-6 pt-32">
    <div className='max-w-5xl w-full flex flex-wrap  gap-6 gap-y-8 justify-items-stretch  '>
      {data?.map((event, index) => (
        <EventCard key={index + 1} className="" event={event} />
      ))}</div>
    </main>
  );
}
