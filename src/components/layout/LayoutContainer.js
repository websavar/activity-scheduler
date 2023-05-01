import { Navbar } from "components";

const LayoutContainer = () => {

  return (
    <>
      <Navbar />
      <main className="w-screen h-full flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-light text-slate-800 ">Activity Scheduler</h1>
      </main>
    </>
  );
};

export default LayoutContainer;
