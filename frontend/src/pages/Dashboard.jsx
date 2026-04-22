import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [units, setUnits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUnits = async () => {
      const res = await API.get("/units");
      setUnits(res.data);
    };

    fetchUnits();
  }, []);

  return (
    <div>
      <h2>Select Unit</h2>

      {units.map((unit) => (
        <div key={unit._id}>
          <button onClick={() => navigate(`/topics/${unit._id}`)}>
            {unit.unitName}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;