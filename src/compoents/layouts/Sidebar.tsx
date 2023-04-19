import { HomeOutlined, SearchOutlined, HeartOutlined, UnorderedListOutlined } from "@ant-design/icons";
const Sidebar = () => {
  return (
    <div className="border-bottom border-end border-secondary border-2" style={{ width: "300px", height: "650px" }}>
      <div className="border-bottom border-secondary border-2 h-50 p-3">
        {/* <div className="d-flex align-items-center">
          <HomeOutlined />
          <div>Home</div>
        </div>
        <div className="d-flex align-items-center">
          <SearchOutlined />
          <div>Search</div>
        </div>
        <div className="d-flex align-items-center">
          <HeartOutlined />
          <div> Favourites</div>
        </div>
        <div className="d-flex align-items-center">
          <UnorderedListOutlined />
          <div>Playlist</div>
        </div> */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <div>
              <HomeOutlined />
              Home
            </div>
            <div>
              <SearchOutlined />
              Search
            </div>
            <div>
              <i className="bi bi-music-note-list"></i>
              Playlists
            </div>
            <div>
              <HeartOutlined />
              Favourites
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
