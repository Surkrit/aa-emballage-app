import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

import makeData from "./Utils";

const Styles = styled.div`
@import "../variables";

.emballage-date {
  display: flex;
  align-items: center;
  width: 190px;
  justify-content: space-between;
  input[type="date"] {
    border-radius: 5px;
    height: 25px;
  }
}

.emballage-buttons {
  button {
    width: 250px;
    height: 60px;
    font-size: 20px;
    border: 0px;
    font-weight: 600;
    background: #e4e4e4;
    a{
      color: #707070;
      text-decoration: none;
    }
    &:first-of-type {
      border-radius: 5px 0px 0px 0px;
    }
    &:last-of-type {
      border-radius: 0px 5px 0px 0px;
    }
  }
  .button--active{
    background: #00904A;
    a{
      color: white;
    }
  }
}

table {
  width: 100%;
  tr {
    th {
      border: 1px solid #707070;
      font-weight: 600;
      padding: 5px;
    }

    &:nth-child(even) {
      td {
        border: 1px solid #707070;
        padding: 5px;
        
        background: white;
      }
    }
    &:nth-child(odd) {
      td {
        border: 1px solid #707070;
        padding: 5px;
        
        background: lightgrey;
      }
    }

    .row--red {
      background: #f8cdce;
      border: 1px solid #707070 !important;
    }
    .row--green {
      background: #bfe1cc;
    }
    .empty{
      color: white;
    }
  }
}

.table-buttons{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.comment--row{
  display: flex;
  justify-content: end;
  border: 0px solid black !important
}
`;
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return <input type="checkbox" ref={resolvedRef} {...rest} />;
  }
);

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    state
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <>
      <div>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
              {column.id}
            </label>
          </div>
        ))}
        <br />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id"
      },
      {
        Header: "Accep. af AA",
        accessor: "accepAA"
      },
      {
        Header: "Accep.",
        accessor: "accepKunde"
      },
      {
        Header: "Kvittings nr. ",
        accessor: "KvitteringNr"
      },
      {
        Header: "Tur nr",
        accessor: "turNr"
      },
      {
        Header: "Dato",
        accessor: "dato"
      },
      {
        Header: "T5 RFID CC",
        accessor: "t5RFIDcc"
      },
      {
        Header: "Hylder",
        accessor: "hylder"
      },
      {
        Header: "Forlænger",
        accessor: "forlaenger"
      },
      {
        Header: "RFID CC",
        accessor: "RFIDcc"
      },
      {
        Header: "½ RFID CC",
        accessor: "halvRFIDcc"
      },
      {
        Header: "½ Hylde",
        accessor: "halvHylde"
      },
      {
        Header: "½ CC",
        accessor: "halvCC"
      },
      {
        Header: "DS ½CC",
        accessor: "dsHalvCC"
      },
      {
        Header: "DS ½ Hylde",
        accessor: "dsHalvHylde"
      },
      {
        Header: "Europalle",
        accessor: "europalle"
      },
      {
        Header: "½ Palle",
        accessor: "halvPalle"
      },
      {
        Header: "1⁄4 Palle",
        accessor: "kvartPalle"
      },
      {
        Header: "CC",
        accessor: "cc"
      },
      {
        Header: "Søjlerør",
        accessor: "soejleroer"
      },
      {
        Header: "Signeret",
        accessor: "signeret"
      },
      {
        Header: "Kommentar",
        accessor: "kommentar"
      },
      {
        Header: "PDF",
        accessor: "pdf"
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(10), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default App;
