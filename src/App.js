import "./App.css";
import AddExpense from "./Pages/AddExpense/AddExpense";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./core/Navbar";
import { GlobalProvider } from "./context/EXpencecontext/Expencecontext";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import SettingPageappearance from "./Pages/SettingsPage/SettingPageappearance";
import SearchPage from "./Pages/SearchPage/SearchPage";
function App() {
  return (
    <GlobalProvider>
        <Router>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/expence" component={AddExpense}/>
        <Route path="/settings" component={SettingsPage}/>
        <Route path="/theme" component={SettingPageappearance}/>
        <Route path="/search" component={SearchPage}/>
      </Switch>
    </Router>

    </GlobalProvider>
  )
}

export default App;
