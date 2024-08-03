import Box from "@/components/common/box";
import Card from "@/components/common/card";
import Title from "@/components/common/title";

const UpdateWifi = () => {
  return (
    <Card
      className={
        "grid md:col-start-7 md:col-end-13 md:row-start-4 lg:col-start-10 lg:col-end-13 lg:row-start-1"
      }
    >
      <Title as={"h3"} className={"!text-title-medium"}>
        Datos de wifi
      </Title>
      <Box className={"col-span-4 grid"}>
        <p> Datos de wifi</p>
      </Box>
    </Card>
  );
};
export default UpdateWifi;
