import { PlayCircleOutlined, LeftOutlined, BellOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
const Navbar = () => {
  return (
    <div className="d-flex align-items-center border-bottom border-2 border-secondary p-0 " style={{ height: "8vh" }}>
      <div
        className="d-flex align-items-center fs-4  ps-5 pe-5   border-end border-2 border-secondary"
        style={{ height: "100%" }}
      >
        <div className="me-2 fw-bold">MUSIC PLAYER</div>
        <PlayCircleOutlined />
      </div>
      <div
        className="border border-2 border-secondary d-flex justify-content-center align-items-center ms-4 me-auto rounded fs-8"
        style={{ height: "45%", aspectRatio: "1/1" }}
      >
        <LeftOutlined />
      </div>
      <div className="d-flex align-items-center me-4 " style={{ height: "100%" }}>
        <div className="input-group ">
          <input type="text" className="form-control" placeholder="What you wish?" />
          <button className="btn btn-outline-secondary" type="button" id="search-btn">
            <SearchOutlined />
          </button>
        </div>
        <BellOutlined className=" ms-4 me-1" />
        <div className="d-flex align-items-center border border-secondary border-2 ms-4 p-2 rounded-circle">
          <UserOutlined />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
