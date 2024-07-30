import UpdateLogo from "@/components/common/update-logo";
import UpdateMenu from "@/components/common/update-menu";
import UpdateMessage from "@/components/common/update-message";
import UpdateWifi from "@/components/common/update-wifi";

const General = () => {
  return (
    <>
      <UpdateMenu />
      <UpdateMessage />
      <UpdateWifi />
      <UpdateLogo />
    </>
  );
};
export default General;
