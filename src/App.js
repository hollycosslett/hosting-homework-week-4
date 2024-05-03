import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="weather-app">
          <Header />
          <Main />
          <Footer />
        </div>
        <script src="src/index.js"></script>
      </body>
    </div>
  );
}
