import React from "react";

function Prizes() {
  return (
    <div className="section mt-2">
      <div className="row align-items-stretch justify-content-center">
        {/*  prize container */}
        <div className="col-lg-4 px-2">
          <div className="prize">
            <div className="prizeTitle">Winner</div>
            <div className="prizeCash">N1,000,000</div>
            <div className="prizeDetails">
              <div className="prizeDetail">
                + Bone Straight Hair
              </div>
            </div>
          </div>
        </div>
        {/*  prize container */}
        <div className="col-lg-4 px-2">
          <div className="prize">
            <div className="prizeTitle">2nd Position</div>
            <div className="prizeCash">N500,000</div>
          </div>
        </div>
        {/* prize container  */}
        <div className="col-lg-4 pl-2">
          <div className="prize">
            <div className="prizeTitle">3rd Position</div>
            <div className="prizeCash">N200,000</div>
          </div>
        </div>
      </div>

      <div className="row align-items-stretch justify-content-center mt-4">
        {/*  prize container */}
        <div className="col-lg-4 px-2">
          <div className="prize">
            <div className="prizeTitle">4th Position</div>
            <div className="prizeCash">N1,000,000</div>
            <div className="prizeDetails">
              <div className="prizeDetail">
                + Bone Straight Hair
              </div>
            </div>
          </div>
        </div>
        {/*  prize container */}
        <div className="col-lg-4 px-2">
          <div className="prize">
            <div className="prizeTitle">5th Position</div>
            <div className="prizeCash">N500,000</div>
          </div>
        </div>
        {/* prize container  */}
        <div className="col-lg-4 pl-2">
          <div className="prize">
            <div className="prizeTitle">6th Position</div>
            <div className="prizeCash">N200,000</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Prizes;
