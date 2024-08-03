import { twMerge } from "tailwind-merge";

import Box from "@/components/common/box";
import Card from "@/components/common/card";
import Title from "@/components/common/title";

const UpdateMenu = () => {
  return (
    <Card
      className={
        "grid h-[300px] grid-rows-[auto_1fr_auto] md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-6"
      }
    >
      <Title className={"!text-title-medium"}>Cargar menu</Title>
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
