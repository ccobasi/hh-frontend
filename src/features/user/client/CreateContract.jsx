// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateContract = ({ projectId, proposalId, freelancerId, clientId }) => {
  const [contractAmount, setContractAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [terms, setTerms] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log("Client ID:", clientId);
 
   useEffect(() => {
    console.log("Received clientId:", clientId);
    console.log("Received projectId:", projectId);
    console.log("Received freelancerId:", freelancerId);
    console.log("Proposal details:", proposalId);
  }, [clientId, projectId, freelancerId, proposalId]);

  const handleCreateContract = async () => {
    setLoading(true);
    setError(null);

    const contractData = {
      project: projectId,
      proposal: proposalId,
      freelancer: freelancerId,
      client: clientId,
      contract_amount: contractAmount,
      start_date: startDate,
      end_date: endDate,
      terms: terms,
    };

    try {
      const response = await axios.post(
        `ccobasi.pythonanywhere.com/contract/contracts/`,
        contractData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log("Contract created:", response.data);
        toast.success("Contract created successfully.");
        navigate("/client");
      } else {
        setError("Failed to create contract.");
      }
    } catch (error) {
      console.error("Error creating contract:", error);
      setError("Failed to create contract.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],

          textAlign: "center",
          mt: "10%",
          letterSpacing: "1px",
          fontFamily: "Poppins",
          fontWeight: "500",
          ml: { xs: "8%", sm: "7%", md: "0%", lg: "0%" },
        }}
      >
        Let <i> you and the freelancer</i> reach an agreement <i>! </i>
      </Typography>

      <Container component="main" maxWidth="md">
        <Box
          sx={{
            mt: 10,
            mb: 22,
            fontFamily: "Poppins",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#F1F3F4",
            pr: "20px",
            pl: "20px",
            ml: { xs: "8%", sm: "7%", md: "0%", lg: "0%" },
          }}
        >
          <Box sx={{ mt: 4, mb: 4 }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "12px",
                lineHeight: "20.8px",

                letterSpacing: "1px",
                textAlign: "center",
                color: "#000000",
                // color: (theme) =>
                //   theme.palette.mode === "light"
                //     ? theme.palette.primary.lightModeHeroTitle
                //     : theme.palette.primary.darkModeHeroTitle,
                pt: "10px",
              }}
            >
              Create Contract
            </Typography>

            {error && (
              <Typography
                variant="body2"
                className="error"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "10px",
                  lineHeight: "24px",
                  letterSpacing: "-1%",
                  mb: "90%",
                }}
              >
                {error}
              </Typography>
            )}

            <TextField
              fullWidth
              label="Amount Budgeted"
              type="number"
              value={contractAmount}
              onChange={(e) => setContractAmount(e.target.value)}
              margin="normal"
              variant="outlined"
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />

            <TextField
              fullWidth
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />

            <TextField
              fullWidth
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />

            <TextField
              fullWidth
              label="Terms"
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              margin="normal"
              variant="outlined"
              multiline
              rows={10}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />

            {/* Hidden fields for IDs */}
            <input type="hidden" name="projectId" value={projectId} />
            <input type="hidden" name="proposalId" value={proposalId} />
            <input type="hidden" name="freelancerId" value={freelancerId} />
            <input type="hidden" name="clientId" value={clientId} />

            {/* Displaying IDs */}
            <TextField
              fullWidth
              label="Project ID"
              value={projectId}
              margin="normal"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />
            <TextField
              fullWidth
              label="Proposal ID"
              value={proposalId}
              margin="normal"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />
            <TextField
              fullWidth
              label="Freelancer ID"
              value={freelancerId}
              margin="normal"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />
            <TextField
              fullWidth
              label="Client ID"
              value={clientId}
              margin="normal"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                backgroundColor: "#34acf8",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[400]
                      : theme.palette.grey[500],
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                },
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "24px",
                letterSpacing: "-1%",
                color: "#fff",
              }}
              onClick={handleCreateContract}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Create Contract"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreateContract;
