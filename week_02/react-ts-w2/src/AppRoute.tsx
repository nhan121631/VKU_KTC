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
import { BtnApp } from "./BtnApp";
import { Day08 } from "./Practice/Day08/Day08";
import { AfternoonDay8 } from "./Practice/Day08/Afternoon";
import { FormOne } from "./Practice/Day08/Afternoon/FormOne";
import { BtnDay08 } from "./Practice/Day08/BtnDay08";
import { BtnAfternoonDay8 } from "./Practice/Day08/Afternoon/BtnAffterNoon08";
import { FormTwo } from "./Practice/Day08/Afternoon/FormTwo";
import { FormThree } from "./Practice/Day08/Afternoon/FormThree";
import { HomeWork08 } from "./Practice/Day08/Homework";

export const AppRoute = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Day07 />}>
        <Route index element={<BtnApp />} />
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

        <Route path="day08" element={<Day08 />}>
          <Route index element={<BtnDay08 />} />
          <Route path="afternoon" element={<AfternoonDay8 />}>
            <Route index element={<BtnAfternoonDay8 />} />
            <Route path="formone" element={<FormOne />} />
            <Route path="formtwo" element={<FormTwo />} />
            <Route path="formthree" element={<FormThree />} />
          </Route>
          <Route path="homework" element={<HomeWork08 />} />
        </Route>


      </Route>
    </Routes>
  );
};
