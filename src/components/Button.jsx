function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-slate-400 text-white p-2 rounded-md display flex justify-center items-center mt-4 w-full hover:bg-slate-500 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;