import { PanelRightOpen } from "lucide-react";

interface ButtonResizePanelProps {
  onClick: () => void;
}

const ButtonResizePanel = ({ onClick }: ButtonResizePanelProps) => {
  return (
    <div
      className={
        "flex size-[30px] cursor-pointer items-center justify-center border"
      }
      onClick={onClick}
    >
      <PanelRightOpen className={"text-neutral-n40"} />
    </div>
  );
};
export default ButtonResizePanel;
