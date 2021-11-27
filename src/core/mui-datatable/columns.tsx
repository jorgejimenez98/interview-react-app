import { ThumbnailColumn } from "../ColumnComponents";
import { MUIDataTableColumn } from "mui-datatables";

export const columns: MUIDataTableColumn[] = [
  {
    name: "id",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "thumbnail",
    label: "Thumbnail",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value: any, tableMeta: any) => {
        const id = tableMeta.rowData[0];
        return <ThumbnailColumn src={value} id={id} />;
      },
    },
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value: string) => {
        return (
          <h5>
            <strong>{value}</strong>
          </h5>
        );
      },
    },
  },
];
