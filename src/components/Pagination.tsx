import { ArrowRight, ArrowLeft } from "lucide-react";

type Props = {
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  onNext,
  onPrev,
  onPageChange,
}: Props) {

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-sm">
      <div className="order-1 sm:order-none">
        <button
          onClick={onPrev}
          disabled={page === 1}
          className="flex items-center text-[15px] gap-1 text-gray-500 dark:text-white cursor-pointer hover:text-indigo-600 disabled:opacity-30"
        >
          <ArrowLeft />
          <span>Previous</span>
        </button>
      </div>

      <div className="order-2 sm:order-none flex items-center gap-2 flex-wrap justify-center">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-5 h-5 md:w-8 md:h-8 flex items-center justify-center rounded-md text-sm  transition ${
              p === page
                ? "bg-indigo-100 text-indigo-600 font-semibold"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="order-3 sm:order-none">
        <button
          onClick={onNext}
          disabled={page === totalPages}
          className="flex text-[15px] items-center gap-1 cursor-pointer text-gray-500 dark:text-white hover:text-indigo-600 disabled:opacity-30"
        >
          <span>Next</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
