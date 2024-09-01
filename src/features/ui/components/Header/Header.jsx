// eslint-disable-next-line react/prop-types
function Header({ className, children }) {
  return (
    <div
      className={`flex h-12 justify-between align-baseline px-4 py-[6px] bg-secondaryGray border-2 border-gray-500 border-collapse ${className}`}
    >
      {children}
    </div>
  );
}

export default Header;
