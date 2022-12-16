import Nav from "../components/Nav";
import FormI from "../components/FormI";
import Footer from "../components/Footer";

export default function CarsFormE() {
  return (
    <div className="container">
      <Nav />
      <div className="content">
        <main className="main-content">
          <p className="title">Add new car</p>
          <FormI />
        </main>
        <Footer />
      </div>
    </div>
  );
}
