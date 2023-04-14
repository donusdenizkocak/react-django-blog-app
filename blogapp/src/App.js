
import { Provider } from 'react-redux';
import store, { persistor } from './app/store';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { blueGrey, pink } from "@mui/material/colors";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: pink["900"],
        light: pink["600"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <AppRouter/>
       </PersistGate>
     </Provider>
     <ToastContainer/>
     </ThemeProvider>
      
    </>
  );
}

export default App;
