import { useState, useEffect } from "react";
import Web3 from "web3";
import abi from "../../../../artifacts/contracts/judiciary.sol/Judiciary.json";

const CONTRACT_ABI = abi.abi;
const CONTRACT_ADDRESS = "0xcBeA3D1CFE114f7ea36b20a99f9E2fC68867b4AA";

function FIR() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [policeStation, setPoliceStation] = useState("");
  const [complaintType, setComplaintType] = useState("");
  const [incidentDetails, setIncidentDetails] = useState("");
  const [name, setName] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const [cityStateZip, setCityStateZip] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [firData, setFirData] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        const contractInstance = new web3Instance.eth.Contract(
          CONTRACT_ABI,
          CONTRACT_ADDRESS
        );
        setWeb3(web3Instance);
        setContract(contractInstance);
        setAccount(accounts[0]);
      } else {
        alert("MetaMask is required to use this DApp");
      }
    };
    init();
  }, []);

  const handleRegisterFIR = async () => {
    try {
      await contract.methods
        .setFIR(
          policeStation,
          complaintType,
          incidentDetails,
          name,
          contactAddress,
          cityStateZip,
          contact,
          email
        )
        .send({ from: account });
      alert("FIR registered successfully");
      clearForm();
    } catch (error) {
      alert("Error registering FIR: " + error.message);
    }
  };

  const handleUpdateFIR = async () => {
    try {
      await contract.methods
        .updateFIR(
          policeStation,
          complaintType,
          incidentDetails,
          name,
          contactAddress,
          cityStateZip,
          contact,
          email
        )
        .send({ from: account });
      alert("FIR updated successfully");
      clearForm();
    } catch (error) {
      alert("Error updating FIR: " + error.message);
    }
  };

  const handleDeleteFIR = async () => {
    try {
      await contract.methods.deleteFIR().send({ from: account });
      alert("FIR deleted successfully");
      clearForm();
      setFirData(null);
    } catch (error) {
      alert("Error deleting FIR: " + error.message);
    }
  };

  const handleFetchFIR = async () => {
    try {
      const data = await contract.methods.getFIR().call({ from: account });
      setFirData(data);
    } catch (error) {
      alert("Error fetching FIR data: " + error.message);
    }
  };

  const downloadFIR = () => {
    if (firData) {
      const text = `
        Police Station: ${firData[0]}
        Complaint Type: ${firData[1]}
        Incident Details: ${firData[2]}
        Name: ${firData[3]}
        Contact Address: ${firData[4]}
        City, State, ZIP: ${firData[5]}
        Contact Number: ${firData[6]}
        Email: ${firData[7]}
      `;
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "FIR_data.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No FIR data to download");
    }
  };

  const clearForm = () => {
    setPoliceStation("");
    setComplaintType("");
    setIncidentDetails("");
    setName("");
    setContactAddress("");
    setCityStateZip("");
    setContact("");
    setEmail("");
  };

  return (
    <div className="bg-background bg-cover bg-center bg-no-repeat">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black bg-opacity-30 backdrop-blur-md">
        <h2 className="font-bold text-xl text-white text-center">
          FIR Registration DApp
        </h2>
        {account && (
          <div className="account-info text-white text-center mb-4">
            <h3 className="font-medium">Connected Account</h3>
            <p>{account}</p>
          </div>
        )}
        <form className="my-8">
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="policeStation"
              className="text-sm font-medium text-white leading-none"
            >
              Police Station
            </label>
            <input
              type="text"
              id="policeStation"
              name="policeStation"
              value={policeStation}
              onChange={(e) => setPoliceStation(e.target.value)}
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="complaintType"
              className="text-sm font-medium text-white leading-none"
            >
              Complaint Type
            </label>
            <input
              type="text"
              id="complaintType"
              name="complaintType"
              value={complaintType}
              onChange={(e) => setComplaintType(e.target.value)}
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="incidentDetails"
              className="text-sm font-medium text-white leading-none"
            >
              Incident Details
            </label>
            <textarea
              id="incidentDetails"
              name="incidentDetails"
              value={incidentDetails}
              onChange={(e) => setIncidentDetails(e.target.value)}
              required
              className="flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="name"
              className="text-sm font-medium text-white leading-none"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="contactAddress"
              className="text-sm font-medium text-white leading-none"
            >
              Contact Address
            </label>
            <input
              type="text"
              id="contactAddress"
              name="contactAddress"
              value={contactAddress}
              onChange={(e) => setContactAddress(e.target.value)}
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="cityStateZip"
              className="text-sm font-medium text-white leading-none"
            >
              City, State, ZIP
            </label>
            <input
              type="text"
              id="cityStateZip"
              name="cityStateZip"
              value={cityStateZip}
              onChange={(e) => setCityStateZip(e.target.value)}
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="contact"
              className="text-sm font-medium text-white leading-none"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-white leading-none"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="button"
              onClick={handleRegisterFIR}
            >
              Register FIR
            </button>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="button"
              onClick={handleUpdateFIR}
            >
              Update FIR
            </button>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="button"
              onClick={handleDeleteFIR}
            >
              Delete FIR
            </button>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="button"
              onClick={handleFetchFIR}
            >
              Fetch FIR Data
            </button>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="button"
              onClick={downloadFIR}
            >
              Download FIR Data
            </button>
          </div>
        </form>
        {firData && (
          <div className="fir-data text-white">
            <h3 className="font-medium">FIR Data</h3>
            <p>
              <strong>Police Station:</strong> {firData[0]}
            </p>
            <p>
              <strong>Complaint Type:</strong> {firData[1]}
            </p>
            <p>
              <strong>Incident Details:</strong> {firData[2]}
            </p>
            <p>
              <strong>Name:</strong> {firData[3]}
            </p>
            <p>
              <strong>Contact Address:</strong> {firData[4]}
            </p>
            <p>
              <strong>City, State, ZIP:</strong> {firData[5]}
            </p>
            <p>
              <strong>Contact Number:</strong> {firData[6]}
            </p>
            <p>
              <strong>Email:</strong> {firData[7]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FIR;
