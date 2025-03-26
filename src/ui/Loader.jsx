const Loader = () => {
  return (
    <div className="flex space-x-2 w-full justify-center items-center h-full">
      <span className="sr-only">Loading...</span>
      <div className="h-4 sm:h-8 w-4 sm:w-8 bg-yellow rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 sm:h-8 w-4 sm:w-8 bg-yellow rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 sm:h-8 w-4 sm:w-8 bg-yellow rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader;
