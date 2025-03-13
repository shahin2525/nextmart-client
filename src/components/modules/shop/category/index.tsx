import { ICategory } from "@/types";
import CreateCategoryModal from "./CreateCategoryModal";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { NMTable } from "@/components/ui/core/NMTable";

const ManageCategories = ({ categories }: { categories: ICategory[] }) => {
  // console.log(categories);
  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold"> product Category </h1>
        <CreateCategoryModal />
      </div>
      <NMTable data={categories} columns={columns} />
    </div>
  );
};

export default ManageCategories;
