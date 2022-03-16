// React
import { BrowserRouter } from "react-router-dom";

// Common
import { Header, Footer } from "./components/common/";

import { AppRoutes } from "./routes/AppRoutes";
import { ThemeProvider } from './provider/ThemeProvider';

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
