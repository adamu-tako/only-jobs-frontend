import { Flex } from "../../GlobalStyles/CustomizableGlobal.style";
import SideBar from "../../components/sidebar/Sidebar";
import TopNav from "../../components/TopNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Flex>
        <div>
          <SideBar />
        </div>
        <Flex direction="column">
          <TopNav />
          <Outlet />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
