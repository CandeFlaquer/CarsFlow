import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="container">
      <Nav />
      <div className="content">
        <main className="main-content">
          <h4>Dashboard</h4>
        </main>
        <Footer />
      </div>
    </div>
  );
}
