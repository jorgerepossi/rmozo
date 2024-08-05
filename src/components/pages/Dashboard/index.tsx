import Box from "@/components/common/box";
import Title from "@/components/common/title";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <>
      <Card className={"col-span-3 h-[100%] p-4"}>
        <Title> dashboard</Title>
        <Box>
          <Box> 12</Box>
          <Box> usuarios conectados </Box>
        </Box>
      </Card>
      <Card className={"col-span-3 h-[100%] p-4"}>
        <Title> dashboard</Title>
        <Box>
          <Box> 12</Box>
          <Box> usuarios conectados </Box>
        </Box>
      </Card>
      <Card className={"col-span-3 h-[100%] p-4"}>
        <Title> dashboard</Title>
      </Card>
      <Card className={"col-span-3 h-[100%] p-4"}>
        <Title> dashboard</Title>
      </Card>
    </>
  );
};
export default Dashboard;
