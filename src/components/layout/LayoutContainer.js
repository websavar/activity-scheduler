import { useState } from "react";
import { InputContainer, Activities, Navbar } from 'components';

const LayoutContainer = () => {
  const [activities, setActivities] = useState([]);

  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-light text-slate-800 mt-3">Activity Scheduler</h1>
        <div className="w-full sm:w-full lg:w-[1024px] xl:w-[1080px] p-8">
          <div>
            <InputContainer
              activities={activities}
              setActivities={setActivities}
            />
          </div>
          <div className="bg-white divide-y-2 h-72 overflow-y-auto">
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
