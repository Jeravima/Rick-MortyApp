import { useSearchParams } from "react-router";

export const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") ?? "1");
  const totalPages = 42;

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-10 ">
      <div className="flex w-screen  gap-1 sm:gap-4 items-center justify-center">
        <button
          className="rounded bg-transparent transition-colors  cursor-pointer p-2 disabled:text-gray-400 disabled:cursor-default text-xs sm:text-base   "
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <button
              className="rounded-sm w-10 h-8 p-1 cursor-pointer transition-colors bg-green-300 hover:bg-green-400 text-xs sm:text-base"
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))
          .slice(0, 10)}

        <button
          className="rounded bg-transparent transition-colors  cursor-pointer p-2 disabled:text-gray-400 disabled:cursor-default text-xs sm:text-base   "
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
