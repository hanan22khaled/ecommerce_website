// components/Pagination.jsx
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useContext(ShopContext);

  const goTo = (p) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let pagesToRender = [];
  if (totalPages <= 4) {
    pagesToRender = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (currentPage < 3) {
    pagesToRender = [1, 2, 3, "dots", totalPages];
  } else {
    // لو currentPage >= 3 حسب طلبك نعرض كل الأرقام (النقاط تختفي)
    pagesToRender = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      {pagesToRender.map((p, idx) =>
        p === "dots" ? (
          <span key={`dots-${idx}`} className="px-2">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => goTo(p)}
            className={`px-3 py-1 rounded-full ${
              currentPage === p ? "bg-green-500 text-white" : "bg-white hover:bg-gray-200"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50 px-2"
      >
        {/* small svg arrow بديل عن FontAwesome */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.29 6.71a1 1 0 011.42-1.42l5 5a1 1 0 010 1.42l-5 5a1 1 0 11-1.42-1.42L13.59 12 9.29 7.71z"/>
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
