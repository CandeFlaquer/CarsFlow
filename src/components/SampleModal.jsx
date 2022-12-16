import CarImg from "../assets/Grace-Riviera.png";
import "./css/Modal.css";

export default function SampleModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={props.onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="flex-right">
          <div onClick={props.onClose} className="close-btn">
            X
          </div>
        </div>

        <img src={CarImg} /* alt={title} */ className="modal-img" />

        <div className="modal-content">
          <div className="modal-cotent-title">Grace Gran Prix</div>
          <div className="modal-content-price-container">
            <div className="modal-content-short-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
              quis!
            </div>
            <div className="modal-content-price">
              <span>&#36; 300.000</span>
            </div>
          </div>
          <div className="modal-content-imgs">
            <span>NFT-IMG 1</span>
            <span>NFT-IMG 2</span>
            <span>NFT-IMG 3</span>
          </div>

          {/* ===
          righs side
          === */}
          <div className="modal-content-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore
            quo accusantium, temporibus eos recusandae.
          </div>
          <div className="modal-content-btns">
            <div className="modal-content-buy-btn">BUY GRACE</div>
            <div className="modal-content-inq-btn">INQUIRE</div>
          </div>
          <div className="modal-content-nav">
            <span>EXTERIOR</span>
            <span>INTERIOR</span>
            <span>EXCLUSIVE TRAITS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
