import { Loader } from "lucide-react";

const SmallSpinner = () => {
  return (
    <div className="flex w-[90px] items-center justify-center bg-white">
      <div className="animate-spin">
        <Loader />
      </div>
    </div>
  );
};

export default SmallSpinner;
