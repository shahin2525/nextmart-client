import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";

const NMPaginationTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPage = 10;
  return (
    <div className="flex justify-center gap-2 my-5">
      <Button
        disabled={currentPage === 1}
        onClick={handlePrev}
        variant="outline"
        size="sm"
        className="rounded flex justify-center items-center h-8 w-8"
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)].map((id, idx) => (
        <Button
          onClick={() => setCurrentPage(idx + 1)}
          key={idx}
          variant={currentPage === idx + 1 ? "default" : "outline"}
          size="sm"
          className="rounded flex justify-center items-center h-8 w-8"
        >
          {idx + 1}
        </Button>
      ))}
      <Button
        disabled={currentPage === totalPage}
        onClick={handleNext}
        variant="outline"
        size="sm"
        className="rounded flex justify-center items-center h-8 w-8"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default NMPaginationTable;
