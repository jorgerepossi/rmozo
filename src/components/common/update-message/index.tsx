import { twMerge } from "tailwind-merge";

import Box from "@/components/common/box";
import Card from "@/components/common/card";

const UpdateMessage = () => {
  return (
    <Card
      className={
        "grid md:col-start-7 md:col-end-13 lg:col-start-6 lg:col-end-10"
      }
    >
      <Box className={`flex flex-col ${twMerge("")}`}>
        <p> Mensjes pre definidos</p>
      </Box>
    </Card>
  );
};
export default UpdateMessage;
