import {HomePage} from "../pages/HomePage/HomePage";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";
import {MonthStatisticsPage} from "../pages/MonthStatisticsPage/MonthStatisticsPage";

export const routes = [
  {path: '/home', element: <HomePage/>},
  {path: '/month-statistics', element: <MonthStatisticsPage/>},
  {path: '/', element: <HomePage/>},
  {path: '*', element: <ErrorPage/>},
]