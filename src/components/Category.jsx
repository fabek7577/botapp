function Category({ id, name, activeCategory, onClick }) {
  return (
    <>
      <a
        onClick={onClick}
        className={`rounded-xl sm:rounded-full active:!border-zinc-200 active:!bg-zinc-100 navigator-button py-2 px-4 w-fit h-auto cursor-pointer whitespace-nowrap
        ${activeCategory == id ? "active" : ""}`}
      >
        {name}
      </a>
    </>
  );
}
export default Category;
