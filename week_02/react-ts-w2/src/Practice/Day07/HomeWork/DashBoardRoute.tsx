import { Route, Routes } from "react-router";
import { MainLayout } from "./MainLayout";
import { Patients } from "./Page/Patients";
import { OverViewPage } from "./Page/Overview";
import { MapPage } from "./Page/Map";
import { DepartmentsPage } from "./Page/Departments";
import { Doctor } from "./Page/Doctors";
import { HistoryPage } from "./Page/History";
import { SettingPage } from "./Page/Setting";

export const DashBoardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Patients />} />
        <Route path="overview" element={<OverViewPage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="departments" element={<DepartmentsPage />} />
        <Route path="Doctors" element={<Doctor />} />
        <Route path="History" element={<HistoryPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};
