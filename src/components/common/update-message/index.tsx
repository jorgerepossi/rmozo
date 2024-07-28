import { twMerge } from "tailwind-merge";

import Box from "@/components/common/box";
import Card from "@/components/common/card";

const UpdateMessage = () => {
  return (
    <Card className={"col-start-6 col-end-10 grid"}>
      <Box className={`flex flex-col ${twMerge("")}`}>
        <p> Mensjes pre definidos</p>
      </Box>
    </Card>
  );
};
export default UpdateMessage;
