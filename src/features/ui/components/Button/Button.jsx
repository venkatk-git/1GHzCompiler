// eslint-disable-next-line react/prop-types
function Header({ className, variant = "secondary", children }) {
  const bgColor = variant === "primary" ? "bg-primary" : "border-gray-500";
  return (
    <button className={`px-5 rounded-sm ${bgColor} ${className}`}>
      {children}
    </button>
  );
}

export default Header;
