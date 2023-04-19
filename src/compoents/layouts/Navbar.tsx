const Navbar = () => {
  return (
    <div className="d-flex align-items-center border-bottom border-2 border-secondary p-0 " style={{ height: "8vh" }}>
      <div
        className="d-flex align-items-center fs-4  ps-5 pe-5   border-end border-2 border-secondary"
        style={{ height: "100%", width: "300px" }}
      >
        <div className="me-2 fw-bold">MUSIC PLAYER</div>
        <i className="bi bi-soundwave"></i>
      </div>
      <div
        className=" d-flex justify-content-center align-items-center ms-4 me-auto"
        style={{ height: "50%", aspectRatio: "1/1" }}
      >
        <i className="bi bi-arrow-left-short fs-5 border border-2 border-secondary rounded"></i>
      </div>
      <div className="d-flex align-items-center me-4 " style={{ height: "100%" }}>
        <div className="input-group me-5">
          <input type="text" className="form-control" placeholder="What you wish?" />
          <button className="btn btn-outline-secondary" type="button" id="search-btn">
            <i className="bi bi-search bg-transparent "></i>
          </button>
        </div>
        <i className="bi bi-bell ms-5 me-4 fs-5"></i>
        <i className="bi bi-person-circle fs-2"></i>
      </div>
    </div>
  );
};

export default Navbar;
