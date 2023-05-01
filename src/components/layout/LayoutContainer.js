import { useState } from "react";
import { InputContainer, Activities, Navbar, Weather } from 'components';

const LayoutContainer = () => {
  const [activities, setActivities] = useState([]);

  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col items-center bg-gray-100">
        <Weather />
        <h1 className="text-4xl font-light text-slate-800 mt-5">Activity Scheduler</h1>
        <div className="w-full h-full sm:w-full lg:w-[1024px] xl:w-[1080px] p-8 pt-3">
          <div>
            <InputContainer
              activities={activities}
              setActivities={setActivities}
            />
          </div>
          <div className="bg-white divide-y-2 overflow-unset">
            <Activities
              activities={activities}
              setActivities={setActivities}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutContainer;
