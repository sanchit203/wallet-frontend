import { Box, Tab, Tabs, Typography } from "@mui/material";
import Header from "../mainHeader";
import React from "react";
import AdminTransaction from "./AdminTransaction";
import AdminWithdrawRequest from "./AdminWithdrawRequest";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Users" {...a11yProps(0)} />
            <Tab label="Withdraw request" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AdminTransaction />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AdminWithdrawRequest />
        </CustomTabPanel>
      </Box>
    </>
  );
}
