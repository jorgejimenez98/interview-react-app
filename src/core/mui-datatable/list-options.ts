import { MUIDataTableOptions } from "mui-datatables";

export const listOptions: MUIDataTableOptions = {
  filterType: "textField",
  responsive: "vertical",
  rowsPerPage: 5,
  searchPlaceholder: "Write here to search",
  rowsPerPageOptions: [5, 10, 15, 25, 100],
  selectableRows: "none",
  download: true,
  print: false,
  viewColumns: true,
  filter: true,
};
