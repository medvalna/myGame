import "../App.css";
import "./DesktopList.css";
export const DesktopList = () => {
  return (
    <div className="box">
      <div className="group">
        <button className="d0"> детство</button>
        <button className="d1">10</button>
        <button className=" d2">20</button>
        <button className=" d3">30</button>
        <button className=" d4">40</button>
      </div>
      <div className="group">
        <button className="l0"> жизнь</button>
        <button className="l1">10</button>
        <button className="l2">20</button>
        <button className="l3">30</button>
        <button className="l4">40</button>
      </div>

      <div className="group ">
        <button className="r0"> разное</button>
        <button className="r1">10</button>
        <button className="r2">20</button>
        <button className="r3">30</button>
        <button className="r4">40</button>
      </div>
    </div>
  );
};
