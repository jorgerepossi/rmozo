import UpdateLogo from "@/components/update-logo";
import UpdateMenu from "@/components/update-menu";

const General = () => {
  return (
    <div className={"grid grid-flow-col grid-cols-12 gap-[16px]"}>
      <UpdateMenu />
      <div> Mensjes pre deefinidos</div>
      <UpdateLogo />
      <div> Datos de wifi</div>
    </div>
  );
};
export default General;
