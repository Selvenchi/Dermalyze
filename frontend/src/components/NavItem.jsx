function NavItem({ children, className, ...props }) {
  return (
    <div className={`relative cursor-pointer group ${className}`} {...props}>
      <p>{children}</p>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-600 ease-in-out group-hover:w-full"></span>
    </div>
  );
}

export default NavItem;
