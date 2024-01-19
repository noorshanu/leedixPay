import useDelayUnmount from "../hooks/useDelayUnmount";
import Portal from "./Portal";
import OutsideClickDetector from "../hooks/OutsideClickDetector";

function TransitionWrapper({ children, className, open, handleClose }) {
  const shouldRender = useDelayUnmount(open, 300);
  const modalRef = OutsideClickDetector(
    handleClose,
    open === true && handleClose
  );

  const portalStyle = { zIndex: 100000000 };
  const blackScreenStyle = { zIndex: 100000 };

  return (
    <>
      {shouldRender && (
        <>
          <Portal>
            <div
              ref={modalRef}
              style={portalStyle}
              className={`popup ${className} ${open ? "mount" : "unmount"}`}
            >
              {children}
            </div>
          </Portal>

          <Portal>
            <div
              className={`black-screen-animated ${open ? "show" : "hide"}`}
              style={blackScreenStyle}
            ></div>
          </Portal>
        </>
      )}
    </>
  );
}

export default TransitionWrapper;
