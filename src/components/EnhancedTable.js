import React from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import AddRow from './AddRow';
import '../style/App.css';

// Create an editable cell renderer
/* const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed externall, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <input
      
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
} */

/* EditableCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.any.isRequired,
  }),
  row: PropTypes.shape({
    index: PropTypes.number.isRequired,
  }),
  column: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  updateMyData: PropTypes.func.isRequired,
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
} */

const EnhancedTable = ({
  columns,
  data,
  setData,
  updateMyData,
  skipPageReset,
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
        // Let's make a column for selection
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
      <AddRow addRowHandler={addRowHandler} />
      <table className="enhanced-table" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...(column.id === 'selection'
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                >
                  {column.render('Header')}
                  {column.id !== 'selection' ? (
                    <TableSortLabel
                      active={column.isSorted}
                      // react-table has a unsorted state which is not treated here
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  ) : null}
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

          <div className="pagination">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {<i class="fas fa-chevron-left"></i>}
            </button>

            <span>
              Side{" "}
              <strong>
                {pageIndex + 1} af {pageOptions.length}
              </strong>{" "}
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