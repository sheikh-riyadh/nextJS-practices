import Sidebar from "../../components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <Sidebar />
      </div>
      <div className="col-span-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
