import React, { useEffect, useState } from "react";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "src/components/shared/DashboardCard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { API_CALL } from "src/services/subscriber";
import { showDate } from "src/components/commonfunctions";
function AllSubscriber() {
  //   let ActionButton = <Button variant="contained">Add</Button>;
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    (async () => {
      let { data } = await API_CALL.sunscription.get();
      console.log(data);
      setTableData(data.data);
    })();
  }, []);

  return (
    <PageContainer title="Subscribers" description="">
      <DashboardCard title="Subscribers">
        <BasicTable rows={tableData} />
      </DashboardCard>
    </PageContainer>
  );
}

const BasicTable = ({ rows }) => {
  const title = {
    fontWeight: "bold",
    fontSize: "17px"
  };
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={title}>Sr No</TableCell>
          <TableCell style={title} align="center">
            Email
          </TableCell>
          <TableCell style={title} align="center">
            Wallet Address
          </TableCell>
          <TableCell style={title} align="center">
            Created At
          </TableCell>
          {/* <TableCell align="center">Protein&nbsp;(g)</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            style={{
              background: index % 2 == 0 ? "#e8e8e8" : "white"
            }}
            key={row._id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="center">{row.email}</TableCell>
            <TableCell align="center">{row.walletAddress}</TableCell>
            <TableCell align="center">{showDate(row.createdAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default AllSubscriber;
