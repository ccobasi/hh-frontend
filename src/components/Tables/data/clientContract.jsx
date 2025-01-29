/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "../../MDBox";
import MDTypography from "../../MDTypography";
// import MDProgress from "../../MDProgress";


export default function data() {
  const Project = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  // const Progress = ({ color, value }) => (
  //   <MDBox display="flex" alignItems="center">
  //     <MDTypography variant="caption" color="text" fontWeight="medium">
  //       {value}%
  //     </MDTypography>
  //     <MDBox ml={0.5} width="9rem">
  //       <MDProgress variant="gradient" color={color} value={value} />
  //     </MDBox>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "Client", accessor: "client", width: "30%", align: "left" },
      { Header: "Contract Title", accessor: "contractTitle", align: "left" },
      { Header: "Amount", accessor: "amount", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        client: <Project name="Asana" />,
        contractTitle: "Project Management",
        amount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        status: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Working
          </MDTypography>
        ),
      },
      {
        client: <Project name="Github" />,
        contractTitle: "Code Hosting",
        amount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            $5,000
          </MDTypography>
        ),
        status: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Done
          </MDTypography>
        ),
      },
      {
        client: <Project name="Atlassian" />,
        contractTitle: "Team Collaboration",
        amount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            $3,400
          </MDTypography>
        ),
        status: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Canceled
          </MDTypography>
        ),
      },
      {
        client: <Project name="Spotify" />,
        contractTitle: "Music Streaming",
        amount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        status: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Working
          </MDTypography>
        ),
      },
      {
        client: <Project name="Slack" />,
        contractTitle: "Communication Tool",
        amount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            $1,000
          </MDTypography>
        ),
        status: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Canceled
          </MDTypography>
        ),
      },
      {
        client: <Project name="Invesion" />,
        contractTitle: "Design Collaboration",
        amount: (
          <MDTypography variant="button" color="text" fontWeight="medium">
            $2,300
          </MDTypography>
        ),
        status: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Done
          </MDTypography>
        ),
      },
    ],
  };
}
