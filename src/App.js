import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Bar from './scenes/bar';
import Contacts from './scenes/contacts';
import FAQ from './scenes/faq';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Line from './scenes/line';
import Pie from './scenes/pie';
import Geography from './scenes/geography';


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/team" element={<Team/>} />
                <Route path="/invoices" element={<Invoices/>} />
                <Route path="/line" element={<Line/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/geography" element={<Geography/>} />
                <Route path="/bar" element={<Bar/>} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
