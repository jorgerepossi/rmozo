import Card from "@/components/common/card";

const UpdateLogo = () => {
  return (
    <Card>
      <div className={"flex flex-col"}>
        <p> cargar logo</p>
        <input type="file" />
      </div>
    </Card>
  );
};
export default UpdateLogo;
