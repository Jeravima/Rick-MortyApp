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
    <div className="mt-10 w-xl">
      <div className="flex w-xl gap-4 items-center justify-center">
        <button
          className="rounded bg-green-400 transition-colors hover:bg-green-500 cursor-pointer p-2 disabled:bg-green-700 disabled:cursor-default  "
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <button
              className="rounded-sm w-10 h-8 p-1 cursor-pointer transition-colors bg-green-300 hover:bg-green-400"
              key={index}
              onClick={()=>handlePageChange(index+1)}
            >
              {index + 1}
            </button>
          ))
          .slice(0, 10)}

        <button
          className="rounded bg-green-400 transition-colors hover:bg-green-500 cursor-pointer p-2 disabled:bg-green-700 disabled:cursor-default"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
