import CompaniesCard from "./CompaniesCard";
import IndividualMessageCard from "./IndividualMessageCard";
import msgJsonData from "./msg.json";
import { Grid, Box, Typography } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import {MessageSearchBar} from  "./MessageSearchBar"

export default function MessagePresentation() {
  let companiesMsg = msgJsonData.companies.map((d) => d);
  let individualMsg = msgJsonData.individual.map((d) => d);
  let messages = [...companiesMsg, ...individualMsg];
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(messages);
  //Exclude column list from filter
  const excludeColumns = ["id", "sourceSet", "image", "imageLabel"];
  //Handle change event for search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
    console.log(filterData(value))
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(messages);
    else {
      const filteredData = messages.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  let companiesMessage = data.slice(0, 3);
  let individualMessage = data.slice(3, 6);
  return (
    <>
      <Box sx={{ mt: "2%" }}>
        <Search
          sx={{
            position: "absolute",
            ml: "5%",
            color: "#AFB0B6",
            width: "20.99px",
            height: "19.92px",
            top: "125.54px",
            opacity: "40%",
            display: { xs: "flex", md: "none" },
          }}
        />

        <Search
          sx={{
            position: "absolute",
            ml: "2.5%",
            color: "#AFB0B6",
            width: "20.99px",
            height: "19.92px",
            top: "95.54px",
            opacity: "40%",
            display: { xs: "none", md: "flex" },
          }}
        />

        <input
          type="text"
          placeholder="Search a chat or message"
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
          style={{
            borderRadius: "8px",
            height: "40px",
            border: "1px solid #AFB0B6",
            paddingLeft: "29px",
            paddingTop: "3px",
            paddingBottom: "3px",
            width: "90%",
            marginLeft: "3%",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "22.5px",
            letterSpacing: "-1%",
          }}
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,

          pt: "50px",
          textAlign: "start",
          ml: "4%",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "18.2px",
          letterSpacing: "-1%",
        }}
      >
        Companies
      </Typography>
      <Box>
        {companiesMessage.map((message, index) => (
          <CompaniesCard key={index} {...message} />
        ))}
      </Box>

      <Typography
        variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,

          pt: "50px",
          textAlign: "start",
          ml: "4%",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "18.2px",
          letterSpacing: "-1%",
        }}
      >
        Individual Messages
      </Typography>
      <Box>
        {individualMessage.map((message, index) => (
          <IndividualMessageCard key={index} {...message} />
        ))}
      </Box>
      {data.length === 0 && <span>No records found to display!</span>}
    </>
  );
}
