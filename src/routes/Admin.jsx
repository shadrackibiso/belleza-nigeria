import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/contestants.css";
import avatar from "../images/avatar.png";
import firebase from "firebase/app";
import ReactLoading from "react-loading";
import moment from "moment";

function Admin() {
  const [contestants, setContestants] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  // fetch data
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((data) => {
        let users = [];
        data.forEach((doc) => {
          users.push(doc.data());
        });
        setContestants(users);
      })
      .catch((error) => console.log(error));
  }, []);

  const ImageLoader = () => (
    <div className="dataLoader" style={{ display: contestants && "none" }}>
      <div className="reactLoaderContainer">
        <ReactLoading type="spokes" color="#fbb03b" height={30} width={30} />
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="contestants section">
        {/* <!-- label --> */}
        <div className="label">Admin</div>
        <div className="labelLine"></div>
        {/* search bar */}
        <form className="ctsSearchForm">
          <input
            type="text"
            name="searchBar"
            placeholder="search contestant"
            className="ctsSearchBar"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        {/* contestants */}
        <div className="ctsCardContainer row">
          <ImageLoader />
          {contestants &&
            contestants
              .filter((cts) =>
                cts.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
              .map((cts) => (
                <div className="col-lg-3 col-md-6" key={cts.id}>
                  <div className="ctsCard">
                    <div className="ctsCardImage">
                      <img
                        src={cts.profilePic ? cts.profilePic : avatar}
                        alt="contestant"
                      />
                    </div>
                    <div className="ctsCardDetails">
                      <div className="ctsCardDetail">
                        <div className="ctsCardLabel">Name</div>
                        {cts.name}
                      </div>
                      <div className="ctsCardDetail">
                        <div className="ctsCardLabel">Age</div>
                        {cts.age}
                      </div>
                      <div className="ctsCardDetail">
                        <div className="ctsCardLabel">State Of Origin</div>
                        {cts.state}
                      </div>
                      <div className="ctsCardDetail">
                        <div className="ctsCardLabel">State Of Residence</div>
                        {cts.stateOfResidence}
                      </div>
                      <div className="ctsCardDetail">
                        <div className="ctsCardLabel">Phone Number</div>
                        {cts.phoneNumber}
                      </div>
                      <div className="ctsCardDetail">
                        <div className="ctsCardLabel">Email</div>
                        {cts.email}
                      </div>
                      <div className="ctsCardDetail">
                        <div className="ctsCardLabel">Registered On</div>
                        {moment(cts.createdAt.toDate()).format("LL")}
                      </div>
                      <div className="ctsCardDetail">
                        <div className="ctsCardLabel">Votes</div>
                        {cts.votes}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
