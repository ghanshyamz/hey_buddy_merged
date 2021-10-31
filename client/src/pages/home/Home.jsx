import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div className="sidebar">
          <Sidebar className="sides" />
        </div>
        <div className="feed">
          <Feed />
        </div>

        <div className="rightbar">
          <Rightbar className="sides" />
        </div>
      </div>
    </>
  );
}
