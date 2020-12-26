// import React from "react";
// import styled from "styled-components";
// import { useTable, usePagination, useExpanded } from "react-table";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import makeData from "./Utils";

// import Headline from "./Headline";

// const Styles = styled.div`
//   .emballage-date {
//     display: flex;
//     align-items: center;
//     width: 190px;
//     justify-content: space-between;
//     input[type="date"] {
//       border-radius: 5px;
//       height: 25px;
//     }
//   }

//   .emballage-buttons {
//     button {
//       width: 250px;
//       height: 60px;
//       font-size: 20px;
//       border: 0px;
//       font-weight: 600;
//       background: #e4e4e4;
//       a {
//         color: #707070;
//         text-decoration: none;
//       }
//       &:first-of-type {
//         border-radius: 5px 0px 0px 0px;
//       }
//       &:last-of-type {
//         border-radius: 0px 5px 0px 0px;
//       }
//     }
//     .button--active {
//       background: #00904a;
//       a {
//         color: white;
//       }
//     }
//   }

//   .emballage-table--afleveret {
//     width: 100%;
//       th {
//         border: 1px solid #707070;
//         font-weight: 600;
//         padding: 5px;
//       }
//     .extended-row {
//       td {
//         border: 1px solid #707070;
//         padding: 5px;
//         background: #bfe1cc;
//         height: 2px;
//         &:nth-child(-n + 6),
//         &:nth-last-child(-n + 3) {
//           background: white;
//           border-top: 0px;
//         }
//       }
//     }
//     .table-row {
//       td {
//         border: 1px solid #707070;
//         padding: 5px;
//         background: #f8cdce;
//         &:nth-child(-n + 6),
//         &:nth-last-child(-n + 3) {
//           background: white;
//           border-bottom: 0px;
//         }
//       }
//     }
//   }

//   .emballage-table--balance {
//     width: 100%;
//     tr {
//       th {
//         border: 1px solid #707070;
//         font-weight: 600;
//         padding: 5px;
//       }

//       &:nth-child(even) {
//         td {
//           border: 1px solid #707070;
//           padding: 5px;
//           background: white;
//           height: 2px;
//           border-top: 0px;
//           visibility: hidden;
//           h4:after{
//             content:' '; 
//             visibility: visible;
//             display: block;
//           }
//         }
//       }
//       &:nth-child(odd) {
//         td {
//           border: 1px solid #707070;
//           padding: 5px;
//           background: #white;
//           border-bottom: 0px;
//         }
//       }


//     }
//   }

//   .table-buttons {
//     display: flex;
//     justify-content: space-between;
//   }

//   .comment--row {
//     display: flex;
//     justify-content: end;
//     border: 0px solid black !important;
//   }

//   .table-top--buttons {
//     display: flex;
//     justify-content: space-between;
//     margin-top: 20px;
//   }

//   .dropdown--button {
//     width: 215px;
//     height: 60px;
//     background-color: #dc2f34;
//     border: 0px;
//     color: white;
//     font-size: 20px;
//     font-weight: 600;
//     border-radius: 5px 5px 0px 0px;
//     cursor: pointer;
//   }

//   .dropdown--wrapper {
//     display: block;
//     flex-direction: column;
//     width: 213px;
//     border: 1px solid black;
//     border-top: 0px;
//     border-radius: 0px 0px 5px 5px;
//     padding: 10px 0px;
//     position: absolute;
//     background: white;
//   }

//   .dropdown {
//     &:nth-child(-n + 6),
//     &:nth-last-child(-n + 3) {
//       display: none;
//     }
//   }

//   .pagination {
//     margin-top: 20px;
//     margin-bottom: 100px;
//     justify-content: end;
//     button {
//       background: none;
//       border: 0;
//       cursor: pointer;
//       &:first-of-type {
//         margin-right: 10px;
//       }
//       &:last-of-type {
//         margin-left: 10px;
//       }
//     }
//   }

//   .fa-file-download {
//     cursor: pointer;
//   }

//   .comment-wrapper {
//     display: flex;
//     flex-direction: column;
//     align-items: start;
//     .input-comment {
//       border: 1px solid black;
//       border-radius: 5px;
//       padding: 3px 10px;
//       align-self: start;
//       width: 100%;
//       max-width: 80px;
//       cursor: pointer;
//     }
//     .comment {
//       resize: none;
//       padding: 10px;
//       border-radius: 5px 0px 5px 5px;
//       border: 1px solid black;
//       display: none;
//       position: absolute;
//       margin-top: 30px;
//       align-self: end;
//     }
//     div {
//       margin-top: 5px;
//     }
//   }
// `;

// function SubRows({ row, rowProps, data }) {
//   return (
//     <>
//       {data.map((x, i) => {
//         return (
//           <tr class="extended-row" {...rowProps} key={`${rowProps.key}-expanded-${i}`}>
//             {row.cells.map((cell) => {
//               return (
//                 <td {...cell.getCellProps()}>
//                   <h4>
//                   {cell.render(cell.column.SubCell ? "SubCell" : "Cell", {
//                     value: cell.column.accessor && cell.column.accessor(x, i),
//                     row: { ...row, original: x },
//                   })}
//                   </h4>
//                 </td>
//               );
//             })}
//           </tr>
//         );
//       })}
//     </>
//   );
// }

// function SubRowAsync({ row, rowProps, visibleColumns }) {
//   const [loading, setLoading] = React.useState(true);
//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       setData(makeData(1));
//       setLoading(false);
//     }, 500);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <SubRows
//       row={row}
//       rowProps={rowProps}
//       visibleColumns={visibleColumns}
//       data={data}
//       loading={loading}
//     />
//   );
// }

// function Table({ columns: userColumns, data, renderRowSubComponent }) {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     allColumns,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     nextPage,
//     previousPage,
//     visibleColumns,
//     state: { pageIndex },
//   } = useTable(
//     {
//       columns: userColumns,
//       data,
//       initialState: { pageIndex: 0, pageSize: 10 },
//     },
//     useExpanded,
//     usePagination
//   );

//   //Giver dags dato
//   const today = new Date().toISOString().substr(0, 10);

//   // Render the UI for your table
//   return (
//     <>
//       <Headline title="Emballageoversigt" />

//       <div className="emballage-date">
//         <p>Fra dato:</p> <input type="date" value="2000-01-01" />
//       </div>
//       <div className="emballage-date">
//         <p>Til dato:</p> <input type="date" value={today} />
//       </div>

//       <Router>
//         <Switch>
//           <Route exact path="/Customer/Home">
//             <div className="table-top--buttons">
//               <div className="table-buttons">
//                 <div className="emballage-buttons">
//                   <button className="button--active">
//                     <Link to="Home">Afleveret/returneret</Link>
//                   </button>
//                   <button>
//                     <Link to="Balance">Balance</Link>
//                   </button>
//                 </div>
//               </div>

//               <div className="filter--wrapper">
//                 <button class="dropdown--button">Filtrer</button>
//                 <div class="dropdown--wrapper">
//                   {allColumns.map((column) => (
//                     <div class="dropdown" key={column.id}>
//                       <label>
//                         <input
//                           type="checkbox"
//                           {...column.getToggleHiddenProps()}
//                         />{" "}
//                         {column.id}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <table className="emballage-table--afleveret" {...getTableProps()}>
//             <thead>
//                 {headerGroups.map((headerGroup) => (
//                   <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) => (
//                       <th {...column.getHeaderProps()}>
//                         <h4>{column.render("Header")}</h4>
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody {...getTableBodyProps()}>
//                 {page.map((row, i) => {
//                   prepareRow(row);
//                   const rowProps = row.getRowProps();
//                   return (
//                     // Use a React.Fragment here so the table markup is still valid
//                     <React.Fragment key={rowProps.key}>
//                       <tr class="table-row" {...rowProps}>
//                         {row.cells.map((cell) => {
//                           return (
//                             <td {...cell.getCellProps()}>
//                               <h4>{cell.render("Cell")}</h4>
//                             </td>
//                           );
//                         })}
//                       </tr>
//                       {
//                         (row.isExpanded =
//                           true &&
//                           renderRowSubComponent({
//                             row,
//                             rowProps,
//                             visibleColumns,
//                           }))
//                       }
//                     </React.Fragment>
//                   );
//                 })}
//               </tbody>
//             </table>

//             <div className="pagination">
//             <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//               {<i class="fas fa-chevron-left"></i>}
//             </button>

//             <span>
//               Side{" "}
//               <strong>
//                 {pageIndex + 1} af {pageOptions.length}
//               </strong>{" "}
//             </span>

//             <button onClick={() => nextPage()} disabled={!canNextPage}>
//               {<i class="fas fa-chevron-right"></i>}
//             </button>
//           </div>
//           </Route>

//           <Route exact path="/Customer/Balance">
//             <div className="table-top--buttons">
//               <div className="table-buttons">
//                 <div className="emballage-buttons">
//                   <button>
//                     <Link to="Home">Afleveret/returneret</Link>
//                   </button>
//                   <button className="button--active">
//                     <Link to="Balance">Balance</Link>
//                   </button>
//                 </div>
//               </div>

//               <div className="filter--wrapper">
//                 <button class="dropdown--button">Filtrer</button>
//                 <div class="dropdown--wrapper">
//                   {allColumns.map((column) => (
//                     <div class="dropdown" key={column.id}>
//                       <label>
//                         <input
//                           type="checkbox"
//                           {...column.getToggleHiddenProps()}
//                         />{" "}
//                         {column.id}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <table className="emballage-table--balance" {...getTableProps()}>
//             <thead>
//                 {headerGroups.map((headerGroup) => (
//                   <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) => (
//                       <th {...column.getHeaderProps()}>
//                         <h4>{column.render("Header")}</h4>
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody {...getTableBodyProps()}>
//                 {page.map((row, i) => {
//                   prepareRow(row);
//                   const rowProps = row.getRowProps();
//                   return (
//                     // Use a React.Fragment here so the table markup is still valid
//                     <React.Fragment key={rowProps.key}>
//                       <tr {...rowProps}>
//                         {row.cells.map((cell) => {
//                           return (
//                             <td {...cell.getCellProps()}>
//                               <h4>{cell.render("Cell")}</h4>
//                             </td>
//                           );
//                         })}
//                       </tr>
//                       {
//                         (row.isExpanded =
//                           true &&
//                           renderRowSubComponent({
//                             row,
//                             rowProps,
//                             visibleColumns,
//                           }))
//                       }
//                     </React.Fragment>
//                   );
//                 })}
//               </tbody>
//             </table>

//             <div className="pagination">
//             <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//               {<i class="fas fa-chevron-left"></i>}
//             </button>

//             <span>
//               Side{" "}
//               <strong>
//                 {pageIndex + 1} af {pageOptions.length}
//               </strong>{" "}
//             </span>

//             <button onClick={() => nextPage()} disabled={!canNextPage}>
//               {<i class="fas fa-chevron-right"></i>}
//             </button>
//           </div>
//           </Route>
//         </Switch>
//       </Router>
//     </>
//   );
// }

// //Her skabes kollonerne til tabellen
// function EmballageTable() {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "#",
//         accessor: "id",
//         SubCell: () => null,
//       },
//       {
//         Header: "Accep. af AA",
//         accessor: "accepAA",
//         SubCell: () => null,
//       },
//       {
//         Header: "Accep.",
//         accessor: "accepKunde",
//         SubCell: () => null,
//       },
//       {
//         Header: "Kvittings nr. ",
//         accessor: "KvitteringNr",
//         SubCell: () => null,
//       },
//       {
//         Header: "Tur nr",
//         accessor: "turNr",
//         SubCell: () => null,
//       },
//       {
//         Header: "Dato",
//         accessor: "dato",
//         SubCell: () => null,
//       },
//       {
//         Header: "T5 RFID CC",
//         accessor: "t5RFIDcc",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "Hylder",
//         accessor: "hylder",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "Forlænger",
//         accessor: "forlaenger",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "RFID CC",
//         accessor: "RFIDcc",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "½ RFID CC",
//         accessor: "halvRFIDcc",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "½ Hylde",
//         accessor: "halvHylde",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "½ CC",
//         accessor: "halvCC",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "DS ½CC",
//         accessor: "dsHalvCC",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "DS ½ Hylde",
//         accessor: "dsHalvHylde",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "Europalle",
//         accessor: "europalle",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "½ Palle",
//         accessor: "halvPalle",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "1⁄4 Palle",
//         accessor: "kvartPalle",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "CC",
//         accessor: "cc",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "Søjlerør",
//         accessor: "soejleroer",
//         SubCell: (cellProps) => <> {cellProps.value}</>,
//       },
//       {
//         Header: "Signeret",
//         accessor: "signeret",
//         SubCell: () => null,
//       },
//       {
//         Header: "Kommentar",
//         accessor: "kommentar",
//         SubCell: () => null,
//       },
//       {
//         Header: "PDF",
//         accessor: "pdf",
//         SubCell: () => null,
//       },
//     ],
//     []
//   );

//   const data = React.useMemo(() => makeData(10000), []);

//   const renderRowSubComponent = React.useCallback(
//     ({ row, rowProps, visibleColumns }) => (
//       <SubRowAsync
//         row={row}
//         rowProps={rowProps}
//         visibleColumns={visibleColumns}
//       />
//     ),
//     []
//   );

//   return (
//     <Styles>
//       <Table
//         columns={columns}
//         data={data}
//         renderRowSubComponent={renderRowSubComponent}
//       />
//     </Styles>
//   );
// }

// export default EmballageTable;
