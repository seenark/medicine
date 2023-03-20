import { FC, PropsWithChildren } from "react";

type Props = {
  show: boolean;
  onClose: () => void;
};

const InfoModal: FC<PropsWithChildren<Props>> = ({
  children,
  show,
  onClose,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        id="info-modal"
        className="modal-toggle"
        checked={show}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {children}
          <div className="modal-action">
            <button className="btn bg-orange-base" onClick={onClose}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
