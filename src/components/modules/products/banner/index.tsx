import style from "./product.module.css";

const AllProductsBanner = ({
  title,
  path,
}: {
  title: string;
  path: string;
}) => {
  return (
    <div
      className={`${style.banner} rounded-2xl border-2 mt-8 flex justify-center items-center`}
    >
      <div className="text-center">
        <h1>{title}</h1>
        <h1>{path}</h1>
      </div>
    </div>
  );
};

export default AllProductsBanner;
