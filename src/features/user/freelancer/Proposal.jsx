// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputAdornment } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ManageAccountsOutlined } from "@mui/icons-material";

export default function Proposal() {
  const location = useLocation();
  const { project } = location.state;
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [status, setStatus] = useState("pending");

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);

  //     const proposal = {
  //       project: project.id,
  //       freelancer: user.id,
  //       proposed_rate: data.get("proposedRate"),
  //       estimated_days: data.get("estimatedNumOfDays"),
  //       cover_letter: data.get("coverLetter"),
  //       status: data.get("status"),
  //     };

  //     try {
  //       await axios.post('ccobasi.pythonanywhere.com/proposal/proposals/', proposal, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("access")}`,
  //         },
  //       });
  //       console.log(localStorage.getItem("access"));

  //       navigate("/browse-project");
  //       toast.success("Proposal submitted successfully");
  //     } catch (error) {
  //       console.error('Error submitting proposal:', error);
  //     }
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const proposal = {
      project: project.id,
      freelancer: user.id,
      proposed_rate: data.get("proposedRate"),
      estimated_days: data.get("estimatedNumOfDays"),
      cover_letter: data.get("coverLetter"),
      status: data.get("status"),
    };

    try {
      const accessToken = localStorage.getItem("access");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      await axios.post("ccobasi.pythonanywhere.com/proposal/proposals/", proposal, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      navigate("/browse-project");
      toast.success("Proposal submitted successfully");
    } catch (error) {
      console.error(
        "Error submitting proposal:",
        error.response?.data || error.message
      );
      toast.error("Failed to submit proposal");
    }
  };

  return (
    <>
    <Box sx={{ backgroundColor: "#edeffc", padding: "20px"}}>
      <Typography
        variant="body1"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],

          textAlign: "center",
          mt: "2%",
          fontFamily: "Poppins",
          fontWeight: "500",
          ml: { xs: "11%", sm: "7%", md: "0%", lg: "0%" },
        }}
      >
        Let the <i>client</i> know how qualified you're for the project{" "}
        <i>! </i>
      </Typography>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            mt: 2,
            mb: 22,
            fontFamily: "Poppins",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#F1F3F4",
            pr: "20px",
            pl: "20px",
            ml: { xs: "16%", sm: "6.5%", md: "7%", lg: "0%" },
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 4, mb: 4 }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "200",
                mt: 4,
                mb: 1,
                textAlign: "center",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              Proposal
            </Typography>
            {/**Registration Form Control */}
            <FormControl fullWidth>
              {/**Prject Name Textfield */}
              <TextField
                required
                fullWidth
                id="projectName"
                label="Name of the Project"
                autoComplete="project-name"
                value={project.title}
                InputProps={{
                  readOnly: true,
                }}
                sx={{
                  mb: 2,
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  backgroundColor: "background.default",
                  borderRadius: "16px",
                }}
              />
              {/**Freelancer Name Textfield */}
              <TextField
                required
                fullWidth
                id="freelancerName"
                label="Name"
                name="freelancerName"
                autoComplete="name"
                value={user.names}
                InputProps={{
                  readOnly: true,
                }}
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  mb: "2%",
                  backgroundColor: "background.default",
                  borderRadius: "16px",
                }}
              />
              {/**Proposed Rate Textfield */}
              <TextField
                required
                fullWidth
                id="proposedRate"
                type="number"
                label="Proposed Rate"
                name="proposedRate"
                autoComplete="proposedRate"
                placeholder="Enter proposed rate"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  mb: "2%",
                  backgroundColor: "background.default",
                  borderRadius: "16px",
                }}
              />
              {/**Estimated Days Textfield */}
              <TextField
                required
                fullWidth
                id="estimatedNumOfDays"
                type="number"
                label="Estimated Number of Days"
                name="estimatedNumOfDays"
                autoComplete="estimatedNumOfDays"
                placeholder="Enter estimated number of days"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  mb: "2%",
                  backgroundColor: "background.default",
                  borderRadius: "16px",
                }}
              />
              {/**Cover letter Textfield */}
              <TextField
                required
                fullWidth
                multiline
                rows={10}
                id="coverLetter"
                type="text"
                label="Cover Letter"
                name="coverLetter"
                autoComplete="coverLetter"
                placeholder="Enter cover letter"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  mb: "2%",
                  backgroundColor: "background.default",
                  borderRadius: "16px",
                }}
              />

              {/**Status Textfield */}
              <TextField
                required
                fullWidth
                name="status"
                label="Choose Status"
                id="status"
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <ManageAccountsOutlined
                        sx={{
                          ml: "-25%",
                          color: (theme) =>
                            theme.palette.mode === "light"
                              ? theme.palette.primary.lightModeHeroTitle
                              : theme.palette.primary.darkModeHeroTitle,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                sx={{
                  mt: 1,
                  fontFamily: "Poppins",
                  fontSize: "9px",
                  letterSpacing: "1px",
                  mb: "2%",
                  backgroundColor: "background.default",
                  borderRadius: "16px",
                }}
              >
                <MenuItem
                  value="pending"
                  sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: "9px",
                    letterSpacing: "1px",
                  }}
                >
                  Pending
                </MenuItem>
                <MenuItem
                  value="accepted"
                  sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: "9px",
                    letterSpacing: "1px",
                  }}
                  disabled
                >
                  Accepted
                </MenuItem>
                <MenuItem
                  value="rejected"
                  sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: "9px",
                    letterSpacing: "1px",
                  }}
                  disabled
                >
                  Rejected
                </MenuItem>
              </TextField>
            </FormControl>

            {/**Submit button*/}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
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
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      </Box>
    </>
    //Container End
  );
}
