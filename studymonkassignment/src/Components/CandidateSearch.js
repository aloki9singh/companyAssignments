import React, { useState } from "react";

const CandidateSearch = () => {
  const [location, setLocation] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [candidates, setCandidates] = useState([]);

  const handleSearch = () => {
    // Perform search logic based on location and jobRole
    // Replace this with your actual search implementation
    const fetchedCandidates = [
      { name: "Candidate 1", location: "New York", jobRole: "Developer" },
      { name: "Candidate 2", location: "London", jobRole: "Designer" },
      { name: "Candidate 3", location: "San Francisco", jobRole: "Manager" },
      { name: "Candidate 4", location: "India", jobRole: "FSD" },
    ];

    setCandidates(fetchedCandidates);
  };

  return (
    <div className="h-[130vh] pt-20 px-4  md:mt-5 mt-10">
      <div className=" flex w-full gap-5 justify-space-between">
        <h2 className="text-sm inline font-bold mb-4 m-auto md:text-lg ">
          Candidate Search
        </h2>
        <div className="mb-4 m-auto">
          <label
            htmlFor="location"
            className="block mb-2 text-gray-700"
          ></label>
          <input
            type="text"
            id="location"
            placeholder=" Location"
            className="w-full py-2 px-4 border border-gray-300 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              background:
                "linear-gradient(177.81deg, rgba(255, 255, 255, 0.11) 1.84%, rgba(255, 255, 255, 0) 123.81%)",
            }}
          />
        </div>
        <div className="mb-4 m-auto">
          <label htmlFor="jobRole" className="block mb-2 text-gray-700">
            {/* Job Role: */}
          </label>
          <input
            placeholder=" Job Role"
            style={{
              background:
                "linear-gradient(177.81deg, rgba(255, 255, 255, 0.11) 1.84%, rgba(255, 255, 255, 0) 123.81%)",
            }}
            type="text"
            id="jobRole"
            className="w-full py-2 px-4 border border-gray-300 rounded"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 h-[40px] rounded font-bold m-auto hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className=" ">
        <h3 className="text-xl font-bold mt-6 mb-2">Results:</h3>
        {candidates.length > 0 ? (
          <ul className="border border-gray-300 gap-5 rounded p-4 md:grid md:grid-cols-2   ">
            {candidates.map((candidate) => (
              <li
                key={candidate.name}
                className="mb-4 bg-teal-700 p-4 border border-gray-300 rounded"
              >
                <div className="font-bold">Name: {candidate.name}</div>
                <div className="text-gray-700">
                  Location: {candidate.location}
                </div>
                <div className="text-gray-700">
                  Job Role: {candidate.jobRole}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p>No candidates found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateSearch;
