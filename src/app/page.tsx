import Image from "next/image";
import { getFeaturedEvents } from "../../dummy-data";
import Link from "next/link"
import EventCard from "./components/EventCard";

export default function Home() {

  const eventDetail=getFeaturedEvents();
  return (
  <div className=" h-[100vh]  flex items-center flex-col justify-center ">
    {
      eventDetail.map((event)=> <EventCard key={event.id} event={event}/> )
    }
  
  </div>
  );
}
