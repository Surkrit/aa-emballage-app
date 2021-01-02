import React from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import AddRow from './AddRow';
import '../style/App.css';

const EnhancedTable = ({
  columns,
  data,
  setData,
  updateMyData,
  skipPageReset,
  beforeAddRow,
  beforeTable,
  buttonName,
}) => {
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex},
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            //Sorterer tabellens indhold efter nyeste dato
            id: 'date',
            desc: true
          }
        ]
      },
    //   defaultColumn,
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    useSortBy,
    usePagination,
    hooks => {
      hooks.allColumns.push(columns => [
        // Her bliver column med # lavet, da den ikke er et input. Til hver række bliver dens index+1 vist, da de altid begynder med 0
        {
          id: 'selection',

          Header: () => (
              '#'
          ),
          Cell: ({ row }) => (
            <div>
              {row.index+1}
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  const addRowHandler = row => {
    const newData = data.concat([row])
    setData(newData)
  }

  // Render the UI for your table
  return (
    <>
      <div className="enhanced-table__text"><p>{beforeAddRow}</p></div>
      <AddRow
        addRowHandler={addRowHandler}
        buttonName={buttonName}
      />
      <div className="enhanced-table__text"><p>{beforeTable}</p></div>
      <div className="table-data">
      <table className="enhanced-table" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...(column.id === 'selection'
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                > <h4>
                  {column.render('Header')}
                  {column.id !== 'selection' ? (
                    <TableSortLabel
                      active={column.isSorted}
                      // react-table has a unsorted state which is not treated here
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  ) : null}</h4>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
        </div>

          <div className="pagination">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {<i class="fas fa-chevron-left"></i>}
            </button>

            <span>
              Side{" "}
                {pageIndex + 1} af {pageOptions.length}
              {" "}
            </span>

            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {<i class="fas fa-chevron-right"></i>}
            </button>
          </div>
    </>
  )
}

EnhancedTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  updateMyData: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  skipPageReset: PropTypes.bool.isRequired,
}

export default EnhancedTable