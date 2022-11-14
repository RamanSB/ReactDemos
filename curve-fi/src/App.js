import "./assets/styles/app.css";
import ConnectionPane from "./components/ConnectionPane";
import "./components/Header";
import Header from "./components/Header";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="page-body">
        <Title />
        <ConnectionPane />
      </div>
      {/*<Footer/>*/}
    </div>
  );
}
