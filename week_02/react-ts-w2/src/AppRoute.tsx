import { Route, Routes } from "react-router";
import { Day07 } from "./Practice/Day07/Day07";
import { OverViewPage } from "./Practice/Day07/HomeWork/Page/Overview";
import { MapPage } from "./Practice/Day07/HomeWork/Page/Map";
import { DepartmentsPage } from "./Practice/Day07/HomeWork/Page/Departments";
import { Doctor } from "./Practice/Day07/HomeWork/Page/Doctors";
import { HistoryPage } from "./Practice/Day07/HomeWork/Page/History";
import { SettingPage } from "./Practice/Day07/HomeWork/Page/Setting";
import { MainLayout } from "./Practice/Day07/HomeWork/MainLayout";
import { Patients } from "./Practice/Day07/HomeWork/Page/Patients";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Day07 />}>
        <Route path="Day07/HomeWork" element={<MainLayout />}>
          <Route index element={<Patients />} />
          <Route path="overview" element={<OverViewPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="doctors" element={<Doctor />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="settings" element={<SettingPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
