import ApplicationStatusCard from "./ApplicationStatusCard";
import applicationStatusJsonData from '../applicationStatusData.json';
import { Grid, Box, Typography } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useState } from "react";



export default function ApplicationStatus(){

    let appStatusData = applicationStatusJsonData.map((d)=> d);
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(appStatusData);
    //Exclude column list from filter
  const excludeColumns = ["id","date","jobTitle","location"];
  //Handle change event for search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
    console.log(filterData(value))
  };


  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(appStatusData);
    else {
      const filteredData = appStatusData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };



return(
    <>
    <Box>
    <Search
          sx={{
           // position: "absolute",
           // ml: "5%",
            // color: "#AFB0B6",
            color: "#000000",
            width: "20.99px",
            height: "19.92px",
            top: "125.54px",
            opacity: "40%",
            //display: { xs: "flex", md: "none" },
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
            // paddingTop: "3px",
            // paddingBottom: "3px",
            // width: "90%",
            // marginLeft: "3%",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "22.5px",
            letterSpacing: "-1%",
          }}
        />

    </Box>

    <Box>
        {appStatusData.map((data, id)=>(
            <ApplicationStatusCard key={id}
            {...data}/>
        ))}

    </Box>
    {data.length === 0 && <span>No records found to display!</span>}
    </>
)




};
