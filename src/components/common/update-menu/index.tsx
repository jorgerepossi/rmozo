import { twMerge } from "tailwind-merge";

import Box from "@/components/common/box";
import Card from "@/components/common/card";

const UpdateMenu = () => {
  return (
    <Card
      className={
        "row-start-1 row-end-4 grid md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-6"
      }
    >
      <Box className={`flex flex-col ${twMerge("")}`}>
        <p> cargar menu</p>
      </Box>
    </Card>
  );
};
export default UpdateMenu;
