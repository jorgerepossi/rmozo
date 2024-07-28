import { twMerge } from "tailwind-merge";

import Box from "@/components/common/box";
import Card from "@/components/common/card";

const UpdateMenu = () => {
  return (
    <Card className={"col-start-1 col-end-6 row-start-1 row-end-4 grid"}>
      <Box className={`flex flex-col ${twMerge("")}`}>
        <p> cargar menu</p>
      </Box>
    </Card>
  );
};
export default UpdateMenu;
