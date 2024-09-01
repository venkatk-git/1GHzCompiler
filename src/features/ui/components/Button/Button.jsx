// eslint-disable-next-line react/prop-types
function Header({ className, variant = "secondary", onClick, children }) {
  const bgColor = variant === "primary" ? "bg-primary" : "border-gray-500";
  return (
    <button
      className={`px-5 rounded-sm ${bgColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Header;
