const Tooltop = ({ children, title, position }) => {
  if (!title) return <>{children}</>;

  const positionClass = position === 'left' ? 'left-0' : 'right-0';

  return (
    <div className="relative group flex items-center justify-center ">
      {children}
      <span
        className={`w-max absolute top-[120%] ${positionClass} bg-gray-800 text-white text-sm px-3 py-2 rounded-md opacity-0 lg:group-hover:opacity-100 duration-300 pointer-events-none`}
      >
        {title}
      </span>
    </div>
  );
};

export default Tooltop;
