import Sidebar from "../../components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
