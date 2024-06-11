const Tab = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`flex-1  py-3 font-bold text-md text-primary_color  text-center cursor-pointer border-b-2 ${
        isActive
          ? "border-b-5 overflow-auto  border-primary_color "
          : "text-gray-500 "
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Tab;
