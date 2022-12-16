import "./css/CarForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FileUploader } from "../context/context";
import { Redirect, AddIcon } from "../components/Icons";
import SampleModal from "./SampleModal";
import MultiCarousel from "../components/MultiCarousel";
import "react-multi-carousel/lib/styles.css";

export default function FormE() {
  const [inputs, setInputs] = useState({});
  const [textareas, setTextareas] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTextareas((values) => ({ ...values, [name]: value }));
  };

  return (
    <form>
      <div className="form-title">
        <h2>Grace Grand prix</h2>
      </div>

      <div className="form-body">
        <div className="form-nav">
          <Link className="form-nav-link">
            <b>Exterior</b>
          </Link>
          |
          <Link className="form-nav-link" to="/CarsFormI">
            Interior
          </Link>
          |<Link className="form-nav-link">Exclusive Traits</Link>
        </div>

        <div className="flex-right">
          <div className="sample-btn" onClick={() => setShow(true)}>
            <Redirect color="#2f4c30" />
            See example
          </div>
          <SampleModal onClose={() => setShow(false)} show={show} />
        </div>
        <div className="input-row">
          <div className="input-group">
            <label>
              Main name
              <input
                className="form-imput"
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Price
              <input
                className="form-imput"
                type="number"
                name="price"
                value={inputs.price || ""}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <label>
          Description
          <textarea
            className="form-textarea"
            name="description"
            value={textareas.description || ""}
            onChange={handleText}
          ></textarea>
        </label>
        <label>
          Short Description
          <textarea
            className="form-textarea"
            name="shortDesc"
            value={textareas.shortDesc || ""}
            onChange={handleText}
          ></textarea>
        </label>
        <label>
          Metadata
          <textarea
            className="form-textarea"
            name="metadata"
            value={textareas.metadata || ""}
            onChange={handleText}
          ></textarea>
        </label>

        <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
        <label>
          <div className="label-img-row">
            <span>Images</span>
            <span className="sample-btn">
              <AddIcon color="#2f4c30" />
              Add Images
            </span>
          </div>
          <MultiCarousel />
        </label>
        <div className="flex-right">
          <button className="save-btn">Save</button>
        </div>
      </div>
    </form>
  );
}
