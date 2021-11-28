import {
  ThumbnailColumn,
  HairColumnColumn,
  ActionsColumn,
} from "../ColumnComponents";
import { MUIDataTableColumn } from "mui-datatables";
import { Person } from "../../models/person";

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
        const name = tableMeta.rowData[2];
        return <ThumbnailColumn src={value} id={id} name={name} />;
      },
    },
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
      customFilterListOptions: { render: (v) => `Name: ${v}` },
      customBodyRender: (value: string) => {
        return (
          <h6>
            <strong>{value}</strong>
          </h6>
        );
      },
    },
  },
  {
    name: "age",
    label: "Age",
    options: {
      filter: true,
      sort: true,
      customFilterListOptions: { render: (v) => `Age: ${v}` },
      customBodyRender: (value: number) => {
        return (
          <h6>
            <strong>{value}</strong>
          </h6>
        );
      },
    },
  },
  {
    name: "weight",
    label: "Weight",
    options: {
      filter: true,
      sort: true,
      customFilterListOptions: { render: (v) => `Weight: ${v}` },
      customBodyRender: (value: number) => {
        return (
          <h6>
            <strong>{value.toFixed(2)}</strong>
          </h6>
        );
      },
    },
  },
  {
    name: "height",
    label: "Height",
    options: {
      filter: true,
      sort: true,
      customFilterListOptions: { render: (v) => `Height: ${v}` },
      customBodyRender: (value: number) => {
        return (
          <h6>
            <strong>{value.toFixed(2)}</strong>
          </h6>
        );
      },
    },
  },
  {
    name: "hair_color",
    label: "Hair Color",
    options: {
      filter: true,
      sort: true,
      filterType: "multiselect",
      customFilterListOptions: { render: (v) => `Hair Color: ${v}` },
      customBodyRender: (value: string) => {
        return <HairColumnColumn text={value} />;
      },
    },
  },
  {
    name: "professions",
    label: "Actions",
    options: {
      filter: false,
      sort: false,
      viewColumns: false,
      customBodyRender: (professions: string[], tableMeta: any) => {
        const newPerson: Person = {
          id: tableMeta.rowData[0],
          thumbnail: tableMeta.rowData[1],
          name: tableMeta.rowData[2],
          age: tableMeta.rowData[3],
          weight: tableMeta.rowData[4],
          height: tableMeta.rowData[5],
          hair_color: tableMeta.rowData[6],
          professions: professions,
          friends: tableMeta.rowData[8],
        };
        return <ActionsColumn item={newPerson} />;
      },
    },
  },
  {
    name: "friends",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
];
