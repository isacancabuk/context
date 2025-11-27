import { AppContextProvider } from "../context/AppContext";
import Dashboard from "../pages/Dashboard";

export default function ContextApp() {
  return (
    <AppContextProvider>
      <Dashboard />
    </AppContextProvider>
  );
}
