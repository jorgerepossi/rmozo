import Box from "@/components/common/box";
import Card from "@/components/common/card";

const UpdateWifi = () => {
  return (
    <Card
      className={
        "grid md:col-start-7 md:col-end-13 md:row-start-4 lg:col-start-10 lg:col-end-13 lg:row-start-1"
      }
    >
      <Box className={"flex flex-col"}>
        <p> Datos de wifi</p>
      </Box>
    </Card>
  );
};
export default UpdateWifi;
