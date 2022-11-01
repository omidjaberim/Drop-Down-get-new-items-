/** @format */

import { ThemeProvider } from "react-jss";
import Select from "./Select/Select";
const theme = {
  background: "#eaeaea",
  color: "#24292e",
  spacing: 4,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Select />
    </ThemeProvider>
  );
}

export default App;
