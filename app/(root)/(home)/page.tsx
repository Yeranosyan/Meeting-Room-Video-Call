import MeetingTypeList from "@/components/MeetingTypeList";

function Home() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 sm:px-5 sm:py-5">
          <h2 className="glassmorphism max-w-[200px] sm:max-w-[270px] text-xs sm:text-base rounded-full py-2 text-center font-normal ">
            Upcoming meeting at 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-3xl lg:text-5xl">{time}</h1>
            <p className="text-lg lg:text-xl font-medium text-gray-1">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default Home;
