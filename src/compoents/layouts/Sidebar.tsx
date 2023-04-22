import { useState } from "react";
const Sidebar = () => {
  const [active, setActive] = useState(["bg-warning", "", "", "", ""]);
  const HandleClick = (a: number) => {
    // setActive(active[a]) = "bg-warning";
    if (a === 0) {
      setActive(["bg-warning", "", "", "", ""]);
    }
    if (a === 1) {
      setActive(["", "bg-warning", "", "", ""]);
    }
    if (a === 2) {
      setActive(["", "", "bg-warning", "", ""]);
    }
    if (a === 3) {
      setActive(["", "", "", "bg-warning", ""]);
    }
    if (a === 4) {
      setActive(["", "", "", "", "bg-warning"]);
    }
  };
  return (
    <div className="border-bottom border-end border-secondary border-2" style={{ width: "300px", height: "650px" }}>
      <div className="border-bottom border-secondary border-2 p-3">
        <ul className="nav nav-pills flex-column ">
          <li className="nav-item">
            <div
              className={` mu-2 mb-1 p-2 ps-4 rounded-pill ${active[0]}`}
              id="1"
              onClick={() => {
                HandleClick(0);
              }}
            >
              <i className="bi bi-house me-3 bg-transparent"></i>
              Home
            </div>
          </li>
          <li className="nav-item">
            <div
              className={` mu-2 mb-1 p-2 ps-4 rounded-pill ${active[1]}`}
              id="2"
              onClick={() => {
                HandleClick(1);
              }}
            >
              <i className="bi bi-search-heart me-3 bg-transparent"></i>
              Search
            </div>
          </li>
          <li className="nav-item">
            <div
              className={` mu-2 mb-1 p-2 ps-4 rounded-pill ${active[2]}`}
              id="3"
              onClick={() => {
                HandleClick(2);
              }}
            >
              <i className="bi bi-music-note-list me-3 bg-transparent"></i>
              Playlists
            </div>
          </li>
          <li className="nav-item">
            <div
              className={` mu-2 mb-1 p-2 ps-4 rounded-pill ${active[3]}`}
              id="4"
              onClick={() => {
                HandleClick(3);
              }}
            >
              <i className="bi bi-heart me-3 bg-transparent"></i>
              Favourites
            </div>
          </li>
          <li className="nav-item">
            <div
              className={` mu-2 mb-1 p-2 ps-4 rounded-pill ${active[4]}`}
              id="5"
              onClick={() => {
                HandleClick(4);
              }}
            >
              <i className="bi bi-gear me-3 bg-transparent "></i>
              Settings
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
