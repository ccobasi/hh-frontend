// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CreateContract from "./CreateContract";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showCreateContract, setShowCreateContract] = useState(false);

  axios.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("access");
    if (access) {
      try {
        const parsedAccess = JSON.parse(access);
        config.headers.Authorization = `Bearer ${parsedAccess}`;
      } catch (e) {
        console.error("Failed to parse access token:", e);
        // Remove invalid token from localStorage
        localStorage.removeItem("access");
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);  

useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`https://ccobasi.pythonanywhere.com/project/projects/${id}/`);
        if (response.status === 200) {
          setProject(response.data);
        } else {
          setError(`Failed to fetch project details. Status: ${response.status}`);
        }
      } catch (error) {
        if (error.response) {
          setError(`Error: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
          setError("Error: No response received from the server.");
        } else {
          setError("Error: " + error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);



  const handleProposalStatusChange = async (proposalId, status) => {
    console.log("Client ID:", project.client.id);  
    console.log("Proposal ID:", proposalId);  

    try {
      const proposalResponse = await axios.get(
        `ccobasi.pythonanywhere.com/proposal/projects/${id}/proposals/${proposalId}/`
      );
      const proposalData = proposalResponse.data;

      const updatedData = {
        proposed_rate: proposalData.proposed_rate,
        estimated_days: proposalData.estimated_days,
        cover_letter: proposalData.cover_letter,
        status: status,
      };

      const response = await axios.put(
        `ccobasi.pythonanywhere.com/proposal/projects/${id}/proposals/${proposalId}/`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        
      );
      console.log(response);

      const projectResponse = await axios.get(
        `ccobasi.pythonanywhere.com/project/projects/${id}/`
      );
      setProject(projectResponse.data);
    } catch (error) {
      console.error("Failed to update proposal status:", error);
    }
  };

  const handleCreateContractClick = (proposal) => {
    setSelectedProposal(proposal);
    setShowCreateContract(true);
  };

  if (loading) {
    return (
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
           <Box>
                  <Container component="main" maxWidth="md">
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "14px",
            color: "#ff1744",
            textAlign: "center",
            mt: 3,
          }}
        >
          {error}
        </Typography>
      </Container>
           </Box>
    );
  }

  if (!project || !project.client) {
    return (
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: "14px",
          color: "#ff1744",
          textAlign: "center",
          mt: 3,
        }}
      >
        Error: Project or Client data is missing.
      </Typography>
    );
  }

  return (
    <>
     <Box sx={{ backgroundColor: "#edeffc", padding: "20px"}}>
            <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "20px",
          textAlign: "center",
          color: "#333",
          pt: "20px",
        }}
      >
        Project Details
      </Typography>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          mt: 4,
          p: 3,
          width: { xs: "85%", sm: "90%", md: "80%" }, // Reduce width for smaller screens
          px: { xs: 6, sm: 4, md: 6 }, // Increase padding for smaller screens
          mx: "auto", // Center the container
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              mb: 3,
              p: 3,
              borderRadius: "12px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                mb: 1,
                color: "#333",
                fontSize: "16px",
                letterSpacing: "0.5px",
              }}
            >
              Project for {project.title}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Client: {project.client.first_name} {project.client.last_name}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Description: {project.description}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Budget: #{project.budget}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Category: {project.category}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Skills Required:{" "}
              {Array.isArray(project.skills_required)
                ? project.skills_required.join(", ")
                : project.skills_required}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Closing Date:{" "}
              {new Date(project.closing_date).toLocaleDateString()}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Status: {project.is_open ? "Open" : "Closed"}
            </Typography>
          </Box>

          {/* Proposals */}
          {Array.isArray(project.proposals) && project.proposals.length > 0 ? (
            project.proposals.map((proposal) => (
              <Box
                key={proposal.id}
                sx={{
                  mb: 4,
                  p: 3,
                  borderRadius: "12px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    color: "#333",
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Proposal by {proposal.freelancer.first_name}{" "}
                  {proposal.freelancer.last_name}
                </Typography>
                <Typography
                  sx={{
                    color: "#555",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "13px",
                  }}
                >
                  Proposed Rate: #{proposal.proposed_rate}
                </Typography>
                <Typography
                  sx={{
                    color: "#555",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "13px",
                  }}
                >
                  Estimated Days: {proposal.estimated_days}
                </Typography>
                <Typography
                  sx={{
                    color: "#555",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "13px",
                    mb: 2,
                  }}
                >
                  Cover Letter: {proposal.cover_letter}
                </Typography>
                <Select
                  value={proposal.status}
                  onChange={(e) =>
                    handleProposalStatusChange(proposal.id, e.target.value)
                  }
                  displayEmpty
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "13px",
                    mb: 2,
                    width: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="accepted">Accepted</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                </Select>
                <Button
                  sx={{
                    mt: 2,
                    backgroundColor: "#34acf8",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#00BFFF",
                    },
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    borderRadius: "8px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleCreateContractClick(proposal)}
                >
                  Create Contract
                </Button>
              </Box>
            ))
          ) : (
            <Typography
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
                letterSpacing: "0.5px",
                mt: 3,
              }}
            >
              No proposals available for this project.
            </Typography>
          )}
        </Box>
      </Container>
      
      {showCreateContract && selectedProposal && (
        <CreateContract proposalId={selectedProposal.id} clientId={project.client}
            projectId={project.id}
            freelancerId={selectedProposal.freelancer.id} />
      )}
     </Box>
    </>
  );
};

export default ProjectDetails;
