import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface props {
  visible: boolean;
  onClose: () => void;
}
const Drawer: React.FC<props> = ({ visible = false, onClose }) => {
  const [active, setActive] = useState<boolean>(false);
  const [isRemove, setRemove] = useState<boolean>(!visible);

  useEffect(() => {
    if (visible) {
      setRemove(false);
      setTimeout(() => {
        setActive(true);
      }, 100);
    } else {
      setActive(false);
      setTimeout(() => {
        setRemove(true);
      }, 500);
    }
  }, [visible]);

  return createPortal(
    !isRemove && (
      <div
        className={`fixed top-0 w-screen h-screen transition-all duration-500 md:hidden  ${
          active ? "bg-base-100/75" : "bg-transparent"
        }`}
        onClick={onClose}
      >
        <div
          className={`${
            active ? "translate-x-0" : "-translate-x-full"
          } h-screen w-3/4 max-w-[250px] bg-base-100 transition-all duration-500 p-[15px]`}
        >
            
        </div>
      </div>
    ),
    document.body
  );
};
export default Drawer;
