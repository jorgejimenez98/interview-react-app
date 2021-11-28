import {
  ThumbnailColumn,
  HairColumnColumn,
  ActionsColumn,
  DisplayFilterNumbers,
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
      download: false,
    },
  },
  {
    name: "thumbnail",
    label: "Thumbnail",
    options: {
      filter: false,
      sort: false,
      download: false,
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
      download: true,
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
      download: true,
      filterType: "custom",

      customFilterListOptions: {
        render: (v) => {
          if (v[0] && v[1]) {
            return [`Min Age: ${v[0]}`, `Max Age: ${v[1]}`];
          } else if (v[0]) {
            return `Min Age: ${v[0]}`;
          } else if (v[1]) {
            return `Max Age: ${v[1]}`;
          }
          return [];
        },
        update: (filterList, filterPos, index) => {
          if (filterPos === 0) {
            filterList[index].splice(filterPos, 1, "");
          } else if (filterPos === 1) {
            filterList[index].splice(filterPos, 1);
          } else if (filterPos === -1) {
            filterList[index] = [];
          }

          return filterList;
        },
      },
      filterOptions: {
        names: [],
        logic(age, filters) {
          if (filters[0] && filters[1]) {
            return age < filters[0] || age > filters[1];
          } else if (filters[0]) {
            return age < filters[0];
          } else if (filters[1]) {
            return age > filters[1];
          }
          return false;
        },
        display: (filterList, onChange, index, column) => {
          return (
            <DisplayFilterNumbers
              type={"Age"}
              filterList={filterList}
              onChange={onChange}
              index={index}
              column={column}
            />
          );
        },
      },
    },
  },
  {
    name: "weight",
    label: "Weight",
    options: {
      filter: true,
      sort: true,
      download: true,
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
      download: true,
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
      download: true,
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
      download: false,
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
      download: false,
    },
  },
];
