"use client";
import { ICategory } from "@/types";
import CreateCategoryModal from "./CreateCategoryModal";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { NMTable } from "@/components/ui/core/NMTable";
import { Trash } from "lucide-react";
import { AlertDialogDemo } from "@/components/ui/core/NMModal/DeleteCornfirmationModal";
import { deleteCategory } from "@/services/category";
import { toast } from "sonner";

const ManageCategories = ({ categories }: { categories: ICategory[] }) => {
  // console.log(categories);
  // const handleDelete = async (data: ICategory) => {
  //   console.log(data);
  // };
  const handleDelete = async (data: ICategory) => {
    try {
      const res = await deleteCategory(data._id);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
      // Optionally, you can refresh the categories list or show a success message
    } catch (error) {
      console.error("Failed to delete category:", error);
      // Optionally, show an error message
    }
  };
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
      accessorKey: "isActive",
      header: () => <div>isActive</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <AlertDialogDemo onConfirm={() => handleDelete(row.original)}>
          <button className="text-red-500" title="Delete">
            <Trash className="w-5 h-5" />
          </button>
        </AlertDialogDemo>
      ),
    },
    // {
    //   accessorKey: "action",
    //   header: () => <div>Action</div>,
    //   cell: ({ row }) => (
    //     <button
    //       className="text-red-500"
    //       title="Delete"
    //       onClick={() => handleDelete(row.original)}
    //     >
    //       <Trash className="w-5 h-5" />
    //     </button>
    //   ),
    // },
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
