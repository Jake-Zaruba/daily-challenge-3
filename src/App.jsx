import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employeeName, setEmployeeName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [productLine, setProductLine] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Employee Name"
        onChange={(e) => setEmployeeName(e.target.value)}
      />
    </div>
  );
}

export default App;
