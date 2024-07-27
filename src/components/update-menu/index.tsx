import { twMerge } from "tailwind-merge";

import Card from "@/components/common/card";

const UpdateMenu = () => {
  return (
    <Card className={"col-span-6 row-span-3 grid"}>
      <div className={`flex flex-col ${twMerge("")}`}>
        <p> cargar menu</p>
      </div>
    </Card>
  );
};
export default UpdateMenu;
