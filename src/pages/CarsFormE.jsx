import Nav from "../components/Nav";
import FormE from "../components/FormE";
import Footer from "../components/Footer";

export default function CarsFormE() {
  return (
    <div className="container">
      <Nav />
      <div className="content">
        <main className="main-content">
          <p className="title">Add new car</p>
          <FormE />
        </main>
        <Footer />
      </div>
    </div>
  );
}
