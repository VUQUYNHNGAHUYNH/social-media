const RightSidebar = () => {
  return (
    <section className="sticky right-0 top-0 z-20 flex h-screen w-fit flex-col justify-between gap-12 overflow-auto border-l border-l-gray-500 bg-gray-800 px-10 pb-6 pt-28 max-xl:hidden">
      <div className="flex flex-1 flex-col justify-start">
        <h3>Suggested communities</h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3>Suggested users</h3>
      </div>
    </section>
  );
};

export default RightSidebar;
