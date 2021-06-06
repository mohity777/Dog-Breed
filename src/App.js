import Home from "./Screens/Home";
import Detail from "./Screens/Detail"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import  { BrowserRouter as Router, Switch , Route } from "react-router-dom"
import Header from "./Components/Header"

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat"',
  },
});
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Header/>
          <div style={{height:60}}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Detail" component={Detail} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
