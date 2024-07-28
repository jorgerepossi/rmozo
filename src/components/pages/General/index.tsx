import Box from "@/components/common/box";
import UpdateLogo from "@/components/common/update-logo";
import UpdateMenu from "@/components/common/update-menu";
import UpdateMessage from "@/components/common/update-message";
import UpdateWifi from "@/components/common/update-wifi";

const General = () => {
  return (
    <Box className={"grid grid-flow-col grid-cols-12 grid-rows-12 gap-[16px]"}>
      <UpdateMenu />
      <UpdateMessage />
      <UpdateWifi />
      <UpdateLogo />
    </Box>
  );
};
export default General;
