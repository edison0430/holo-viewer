const SkeletonItem = () => {
  return (
    <div className="w-full shadow bg-white overflow-hidden rounded-lg animate-pulse">
      <div className="relative pt-[56.25%] bg-gray-300"></div>
      <div className="flex items-center h-[80px]">
        <div className="w-[50px] h-[50px] rounded-full ml-2 mr-4 bg-gray-300"></div>
        <div className="flex-1 space-y-4">
          <div className="w-2/3 h-[20px] bg-gray-300  rounded-lg"></div>
          <div className="w-1/3 h-[20px] bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonItem;
