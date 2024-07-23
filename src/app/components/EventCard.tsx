import Link from "next/link";

const EventCard = ({
  event,
}: {
  event: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    isFeatured: boolean;
    image: string;
  };
}) => {

    const humanReadableDate=new Date(event.date).toLocaleDateString('en-us',{
        day:"numeric",
        month:"long",
        year:"numeric"
    })
    console.log("humanReadableDate",humanReadableDate)
  return (
    <div
      key={event.id}
      className="h-[200px] max-w-[800px] overflow-hidden hover:bg-white/20 bg-white/10 rounded-xl gap-3 mb-4 flex"
    >
      <img
        src={event.image}
        alt={event.title}
        className="min-w-[300px] pointer-events-none  object-cover  bg-red-500 h-full"
      />
      <div className="flex">
        <div className="flex flex-col justify-between py-2">
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <div>

          <p className="bg-white/10 w-fit py-1 rounded-full px-2 ">{humanReadableDate}</p>
          <p className="text-xs text-white/80">{event.description}</p>
          </div>
        </div>
        <Link
          href="/user/events"
          className="bg-blue-500 hover:bg-blue-600 font-semibold transition-all duration-150 ml-6 px-4 h-fit rounded-lg whitespace-nowrap text-xl py-2 mt-2 mr-2"
        >
          Explore Event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
