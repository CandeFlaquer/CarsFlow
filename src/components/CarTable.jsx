import CarThumbnail from "../assets/Grace-Riviera 45.png";
import CarThumbnailY from "../assets/YellowCar.png";
import "./css/CarTable.css";

export default function CarTable() {
  return (
    <div className="t-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title Name </th>
            <th scope="col">Publised date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* 
          ===
          row
          ===
          */}
          <tr className="table-row">
            <td className="row-name">
              <img
                src={CarThumbnail}
                alt="Car Thumbnail"
                width="80"
                height="70"
                className="row-thumbnail"
              />
              <div className="name-text">
                <p>Grace Grand Prix green</p> <p>$300.000</p> <p>1 unit</p>
              </div>
            </td>
            <td className="row-date">22.04.22</td>
            <td>
              <div className="row-status-published">Published</div>
            </td>
          </tr>
          {/* 
          ===
          row
          ===
          */}
          <tr className="table-row">
            <td className="row-name">
              <img
                src={CarThumbnailY}
                alt="Car Thumbnail"
                width="80"
                height="70"
                className="row-thumbnail"
              />
              <div>
                <p>Grace Grand Prix yellow</p> <p>$300.000</p> <p>1 unit</p>
              </div>
            </td>
            <td className="row-date">22.04.22</td>
            <td>
              <div className="row-status-paused">Paused</div>
            </td>
          </tr>
          {/* 
          ===
          row
          ===
          */}
          <tr className="table-row">
            <td className="row-name">
              <img
                src={CarThumbnail}
                alt="Car Thumbnail"
                width="80"
                height="70"
                className="row-thumbnail"
              />
              <div className="name-text">
                <p>Grace Grand Prix green</p> <p>$300.000</p> <p>1 unit</p>
              </div>
            </td>
            <td className="row-date">22.04.22</td>
            <td>
              <div className="row-status-published">Published</div>
            </td>
          </tr>
          {/* 
          ===
          row
          ===
          */}
          <tr className="table-row">
            <td className="row-name">
              <img
                src={CarThumbnail}
                alt="Car Thumbnail"
                width="80"
                height="70"
                className="row-thumbnail"
              />
              <div className="name-text">
                <p>Grace Grand Prix green</p> <p>$300.000</p> <p>1 unit</p>
              </div>
            </td>
            <td className="row-date">22.04.22</td>
            <td>
              <div className="row-status-published">Published</div>
            </td>
          </tr>
          {/* 
          ===
          row
          ===
          */}
          <tr className="table-row">
            <td className="row-name">
              <img
                src={CarThumbnail}
                alt="Car Thumbnail"
                width="80"
                height="70"
                className="row-thumbnail"
              />
              <div className="name-text">
                <p>Grace Grand Prix green</p> <p>$300.000</p> <p>1 unit</p>
              </div>
            </td>
            <td className="row-date">22.04.22</td>
            <td>
              <div className="row-status-published">Published</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
