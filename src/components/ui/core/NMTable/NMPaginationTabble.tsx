import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";

const NMPaginationTable = () => {
  return (
    <div className="flex justify-center gap-2 my-5">
      <Button
        variant="outline"
        size="sm"
        className="rounded flex justify-center items-center h-8 w-8"
      >
        <ArrowLeft />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded flex justify-center items-center h-8 w-8"
      >
        1
      </Button>
      <Button
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
