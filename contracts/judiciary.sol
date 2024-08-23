// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Judiciary {
    address private owner;

    struct FIR {
        string policeStation;
        string complaintType;
        string incidentDetails;
        string name;
        string contactAddress;
        string cityStateZip;
        string contact;
        string email;
    }

    mapping(address => FIR) private firMap;
    mapping(address => bool) private hasFIR;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setFIR(
        string memory _policeStation,
        string memory _complaintType,
        string memory _incidentDetails,
        string memory _name,
        string memory _contactAddress,
        string memory _cityStateZip,
        string memory _contact,
        string memory _email
    ) public {
        FIR memory fir = FIR(
            _policeStation,
            _complaintType,
            _incidentDetails,
            _name,
            _contactAddress,
            _cityStateZip,
            _contact,
            _email
        );
        firMap[msg.sender] = fir;
        hasFIR[msg.sender] = true;
    }

    function updateFIR(
        string memory _policeStation,
        string memory _complaintType,
        string memory _incidentDetails,
        string memory _name,
        string memory _contactAddress,
        string memory _cityStateZip,
        string memory _contact,
        string memory _email
    ) public {
        require(hasFIR[msg.sender], "No FIR registered to update");
        FIR memory fir = FIR(
            _policeStation,
            _complaintType,
            _incidentDetails,
            _name,
            _contactAddress,
            _cityStateZip,
            _contact,
            _email
        );
        firMap[msg.sender] = fir;
    }

    function deleteFIR() public {
        require(hasFIR[msg.sender], "No FIR registered to delete");
        delete firMap[msg.sender];
        hasFIR[msg.sender] = false;
    }

    function getFIR()
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(hasFIR[msg.sender], "No FIR registered");
        FIR memory fir = firMap[msg.sender];
        return (
            fir.policeStation,
            fir.complaintType,
            fir.incidentDetails,
            fir.name,
            fir.contactAddress,
            fir.cityStateZip,
            fir.contact,
            fir.email
        );
    }

    function getFIRByAddress(
        address _address
    )
        public
        view
        onlyOwner
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(hasFIR[_address], "No FIR registered for this address");
        FIR memory fir = firMap[_address];
        return (
            fir.policeStation,
            fir.complaintType,
            fir.incidentDetails,
            fir.name,
            fir.contactAddress,
            fir.cityStateZip,
            fir.contact,
            fir.email
        );
    }
}
