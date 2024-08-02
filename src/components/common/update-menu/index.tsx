import { twMerge } from "tailwind-merge";

import Box from "@/components/common/box";
import Card from "@/components/common/card";
import { CardTitle } from "@/components/ui/card";

const UpdateMenu = () => {
  return (
    <Card
      className={
        "row-start-1 row-end-4 grid md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-6"
      }
    >
      <CardTitle className={"!text-title-medium"}>Cargar menu</CardTitle>
      <Box className={`flex flex-col ${twMerge("")}`}>
        <p> blah</p>
      </Box>
      <Box className={`flex flex-col ${twMerge("")}`}>
        <p> blah</p>
      </Box>
    </Card>
  );
};
export default UpdateMenu;
