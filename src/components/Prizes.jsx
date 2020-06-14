import React from "react";

function Prizes() {
  return (
    <div className="section prizeContainer mt-2">
      {/*  prize container */}
      <div className="prize">
        <div className="prizeTitle">Grand prize</div>
        <div className="prizeCash">N200,000</div>
        <div className="prizeDetails">
          <div className="prizeDetail">
            + Photography session by Shutter God Photography
          </div>
          <div className="prizeDetail">+ Makeup session by Sandyz Empire</div>
          <div className="prizeDetail">+ Dinner gown from Sandyz Empire</div>
        </div>
      </div>
      {/*  prize container */}
      <div className="prize">
        <div className="prizeTitle">1st runner up</div>
        <div className="prizeCash">N100,000</div>
        <div className="prizeDetails">
          <div className="prizeDetail">+ Hair product from Sandyz Empire</div>
          <div className="prizeDetail">
            + Photography session by Shutter God Photography
          </div>
          <div className="prizeDetail">+ Makeup session by Sandyz Empire</div>
        </div>
      </div>
      {/* prize container  */}
      <div className="prize">
        <div className="prizeTitle">2nd runner up</div>
        <div className="prizeCash">N50,000</div>
        <div className="prizeDetails">
          <div className="prizeDetail">+ makeup session by Sandyz Empire</div>
          <div className="prizeDetail">
            + Photography session by Shutter God Photography
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
