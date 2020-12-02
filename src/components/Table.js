import React from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";

import makeData from "./Utils";

const Styles = styled.div`
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
      a {
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
    .button--active {
      background: #00904a;
      a {
        color: white;
      }
    }
  }

  table {
    width: 100%;
    margin-bottom: 50px;
    margin-top: 100px;
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
      .empty {
        color: white;
      }
    }
  }

  .table-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .comment--row {
    display: flex;
    justify-content: end;
    border: 0px solid black !important;
  }

  .dropdown--wrapper {
    display: block;
    flex-direction: column;
    width: 213px;
    border: 1px solid black;
    border-top: 0px;
    border-radius: 0px 0px 5px 5px;
    padding: 10px 0px;
    position: absolute;
    background: white;
  }

  .dropdown {
    &:nth-child(-n + 6),
    &:nth-last-child(-n + 4) {
      display: none;
    }
  }

  .dropdown--button {
    width: 215px;
    height: 60px;
    background-color: #00904a;
    border: 0px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    allColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },




  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 },
  },
  usePagination
  );

  // Render the UI for your table
  return (
    <>
      <button class="dropdown--button">Filtrer</button>
      <div class="dropdown--wrapper">
        {allColumns.map((column) => (
          <div class="dropdown" key={column.id}>
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
          {page.map((row, i) => {
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

      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}

        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>

        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
      </div>
    </>
  );
}

//Her skabes kollonerne til tabellen
function EmballageTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Accep. af AA",
        accessor: "accepAA",
      },
      {
        Header: "Accep.",
        accessor: "accepKunde",
      },
      {
        Header: "Kvittings nr. ",
        accessor: "KvitteringNr",
      },
      {
        Header: "Tur nr",
        accessor: "turNr",
      },
      {
        Header: "Dato",
        accessor: "dato",
      },
      {
        Header: "T5 RFID CC",
        accessor: "t5RFIDcc",
      },
      {
        Header: "Hylder",
        accessor: "hylder",
      },
      {
        Header: "Forlænger",
        accessor: "forlaenger",
      },
      {
        Header: "RFID CC",
        accessor: "RFIDcc",
      },
      {
        Header: "½ RFID CC",
        accessor: "halvRFIDcc",
      },
      {
        Header: "½ Hylde",
        accessor: "halvHylde",
      },
      {
        Header: "½ CC",
        accessor: "halvCC",
      },
      {
        Header: "DS ½CC",
        accessor: "dsHalvCC",
      },
      {
        Header: "DS ½ Hylde",
        accessor: "dsHalvHylde",
      },
      {
        Header: "Europalle",
        accessor: "europalle",
      },
      {
        Header: "½ Palle",
        accessor: "halvPalle",
      },
      {
        Header: "1⁄4 Palle",
        accessor: "kvartPalle",
      },
      {
        Header: "CC",
        accessor: "cc",
      },
      {
        Header: "Søjlerør",
        accessor: "soejleroer",
      },
      {
        Header: "Signeret",
        accessor: "signeret",
      },
      {
        Header: "Kommentar",
        accessor: "kommentar",
      },
      {
        Header: "PDF",
        accessor: "pdf",
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(1000), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default EmballageTable;
