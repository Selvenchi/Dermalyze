function Button({ children, icon, className = "", ...props }) {
  return (
    <button
      className={`px-5 py-2 flex items-center justify-center gap-2 bg-[rgba(197,10,8,1)] rounded-full shadow-md text-white ${className} cursor-pointer`}
      {...props}
    >
      {icon && <img src={icon} />}
      <p>{children}</p>
    </button>
  );
}

export default Button;
