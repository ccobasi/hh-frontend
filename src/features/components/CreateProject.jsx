// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import ManageAccountsOutlined from "@mui/icons-material/ManageAccountsOutlined";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const today = dayjs().tz("UTC");

// Custom DatePicker
const CustomDatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        defaultValue={today}
        disablePast
        value={value}
        sx={{
          backgroundColor: "background.default",
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
          borderRadius: "16px",
        }}
        onChange={onChange}
        textField={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

const SubTitleText = ({ subtitle }) => {
  return (
    <Typography
      variant="body2"
      // color="#ffffff"
      style={{ letterSpacing: "1px" }}
    >
      {subtitle}
    </Typography>
  );
};

const IsOpenField = ({ isOpen, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div style={{ alignSelf: "flex-start" }}>
      <FormControlLabel
        control={
          <Checkbox checked={isOpen} onChange={handleChange} color="primary" />
        }
        label="Is Open"
      />
    </div>
  );
};

export default function CreateProjectFormValidation() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    clientId: user?.id || "",
    title: "",
    description: "",
    budget: "",
    category: "",
    skillsRequired: "",
    closingDate: today,
    isOpen: false,
  });

  const categories = [
    { id: 1, name: "accounting & finance" },
    { id: 2, name: "administrative & customer support" },
    { id: 3, name: "agriculture" },
    { id: 4, name: "art & design" },
    { id: 5, name: "business & management" },
    { id: 6, name: "cleaning services" },
    { id: 7, name: "computer & it" },
    { id: 8, name: "education" },
    { id: 9, name: "engineering & architecture" },
    { id: 10, name: "food & hospitality" },
    { id: 11, name: "healthcare" },
    { id: 12, name: "human resources" },
    { id: 13, name: "marketing & content creation" },
    { id: 14, name: "media & entertainment" },
    { id: 15, name: "other" },
  ];

  const {
    clientId,
    title,
    description,
    budget,
    category,
    skillsRequired,
    closingDate,
    isOpen,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      setFormData({ ...formData, closingDate: formattedDate });
    }
  };

  const handleIsOpenChange = (isOpen) => {
    setFormData((prevData) => ({ ...prevData, isOpen }));
  };

  axios.interceptors.request.use(
    (config) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const access = JSON.parse(localStorage.getItem("access"));
      if (user && access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !clientId ||
      !title ||
      !description ||
      !budget ||
      !category ||
      !skillsRequired ||
      !closingDate ||
      !isOpen
    ) {
      setError("Please fill out all fields");
    } else {
      const formData = {
        client: clientId,
        title: title,
        description: description,
        budget: budget,
        category: category,
        skillsRequired: skillsRequired,
        closing_date: closingDate, // Use snake_case for the field name
        is_open: isOpen, // Similarly, use snake_case if required by backend
      };
      console.log("Form data:", formData);
      try {
        const response = await axios.post(
          "ccobasi.pythonanywhere.com/project/projects/",
          formData
        );
        const res = response.data || {};
        console.log(res);
        navigate("/client");
        toast.success("Project created successfully");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
        toast.error("Failed to register. Please try again later.");
      }
    }
  };

  return (
    <>
     <Box sx={{ backgroundColor: "#f1f2f6" }}>
      <Typography
        variant="body1"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,

          textAlign: "center",
          mt: "5%",
          letterSpacing: "1px",
          fontFamily: "Poppins",
          fontWeight: "500",
          ml: { xs: "11%", sm: "12%", md: "0%", lg: "0%" },
        }}
      >
        Let <i> you and the freelancers</i> have <u>an understand</u> of your
        project <i>! </i>
      </Typography>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            mt: 2,
            mb: 22,
            fontFamily: "Poppins",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "background.default",
            pr: "20px",
            pl: "20px",
            ml: { xs: "9%", sm: "8%", md: "5%", lg: "0%" },
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 4, mb: 4 }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "12px",
                lineHeight: "20.8px",

                letterSpacing: "1px",
                textAlign: "center",
                color: "#000000",
                pt: "10px",
              }}
            >
              Create a new project
            </Typography>

            <TextField
              margin="normal"
              id="client"
              label="Client"
              name="client"
              value={user?.names || ""}
              disabled
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={title}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              rows={10}
              id="description"
              label="Description"
              name="description"
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
              value={description}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="budget"
              label="Budget"
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
              value={budget}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="category"
              label="Category"
              value={category}
              select
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ManageAccountsOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
                mt: "3%",
              }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.name}>
                  {cat.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="skillsRequired"
              label="Skills Required"
              value={skillsRequired}
              sx={{
                backgroundColor: "background.default",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                borderRadius: "16px",
              }}
              onChange={handleChange}
            />
            <Stack direction="column">
              <SubTitleText subtitle="Closing Date" />
              <CustomDatePicker
                value={dayjs(closingDate)}
                onChange={handleDateChange}
              />
            </Stack>
            <IsOpenField isOpen={isOpen} onChange={handleIsOpenChange} />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#ded0e3",
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
                color: "#000000",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "24px",
                letterSpacing: "-1%",
              }}
            >
              Create Project
            </Button>

            {error && <SubTitleText subtitle={error} />}
          </Box>
        </Box>
      </Container>
     </Box>
    </>
  );
}
