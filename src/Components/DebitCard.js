import React from "react";

function DebitCard() {
  return (
    <div className="cardGroup">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/swista-3d41b.appspot.com/o/VisaLogo.png?alt=media&token=204aff81-9dec-442f-bd7d-97164ddbbf6c"
        alt=""
        className="cardLogo"
      />

      <img
        src="https://firebasestorage.googleapis.com/v0/b/swista-3d41b.appspot.com/o/chip.png?alt=media&token=3f7d7425-9a51-45f1-b1f0-038e52eefe22"
        alt=""
        className="cardChip"
      />

      <div className="card_number">1234 567 8920 3200</div>
      <div className="card_name">Shashwat Rai</div>
      <div className="card_from">10/21</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
  );
}

export default DebitCard;
