import { HomeOutlined, SearchOutlined, HeartOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
const Sidebar = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="border-bottom border-end border-secondary border-2" style={{ width: "300px", height: "650px" }}>
      {/* <div className="border-bottom border-secondary border-2">
        <div className="d-flex align-items-center">
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
        </div>
      </div> */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <SearchOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UnorderedListOutlined />,
              label: "Playlists",
            },
            {
              key: "4",
              icon: <HeartOutlined />,
              label: "Favourites",
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
