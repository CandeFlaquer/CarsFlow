import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CarTable from "../components/CarTable";

export default function Cars() {
  return (
    <div className="container">
      <Nav />
      <div className="content">
        <main className="main-content">
          <p className="title">Car summary</p>
          <SearchBar />
          <CarTable />
        </main>
        <Footer />
      </div>
    </div>
  );
}
