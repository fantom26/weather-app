import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/common/Header/Header";
import {Footer} from "./components/common/Footer/Footer";
import {AppRoutes} from "./routes/AppRoutes";
import {ThemeProvider} from './provider/ThemeProvider';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="wrapper">
          <Header/>
          <AppRoutes/>
          <Footer/>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
