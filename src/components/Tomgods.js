import React from 'react';
import Headline from './Headline';
import EnhancedTable from './EnhancedTable';
import MakeGods from './MakeGods'
import '../style/App.css';

const Tomgods = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Dato',
        accessor: 'date',
      },
      {
        Header: 'T5 Rfid CC',
        accessor: 't5RfidCc',
      },
      {
        Header: 'Hylder',
        accessor: 'hylder',
      },
      {
        Header: 'Forl.',
        accessor: 'forl',
      },
      {
        Header: 'Rfid CC',
        accessor: 'rfidCc',
      },
      {
        Header: '½ Rfid CC',
        accessor: 'halfRfidCc',
      },
      {
        Header: '½ Hylde',
        accessor: 'halfHylde',
      },
      {
        Header: '½ CC',
        accessor: 'halfCc',
      },
      {
        Header: 'DS ½CC',
        accessor: 'dsHalfCc',
      },
      {
        Header: 'DS ½Hylde',
        accessor: 'dsHalfHylde',
      },
      {
        Header: 'Eupl',
        accessor: 'eupl',
      },
      {
        Header: '½ Pll',
        accessor: 'halfPll',
      },
      {
        Header: '¼ Pll',
        accessor: 'quartPll',
      },
      {
        Header: 'CC',
        accessor: 'cc',
      },
      {
        Header: 'Søjlerør',
        accessor: 'sojleror',
      },
      {
        Header: 'Kommentar',
        accessor: 'comment',
      },
    ],
    []
  )

  const [data, setData] = React.useState(React.useMemo(() => MakeGods(5), []))
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  return (
    <div className="tomgods">
      <Headline title="Tomgods" />
      <EnhancedTable
        beforeAddRow="Bestil afhentning af tomgods"
        buttonName="Bestil"
        beforeTable="Bestilte afhentninger"
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  )
}

export default Tomgods