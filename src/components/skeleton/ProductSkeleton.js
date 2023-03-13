import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductSkeleton = () => {
  return (
    <div className="rounded shadow border bg-white p-3 flex flex-col">
      <SkeletonTheme baseColor="#E5E7EB" highlightColor="#fff">
        <div className="h-52 w-52 mx-auto ">
          <Skeleton height={200} width={200} />
        </div>
        <Skeleton height={25} className={"my-4"} />
        <Skeleton height={25} width={120} className={"py-2"} />
        <Skeleton height={15} count={4} className={"py-2"} />
        <div className="flex gap-2 justify-between">
          <Skeleton height={25} width={230} inline={true} />
          <Skeleton height={25} width={25} inline={true} />
        </div>
      </SkeletonTheme>
    </div>
  );
};
export default ProductSkeleton;
