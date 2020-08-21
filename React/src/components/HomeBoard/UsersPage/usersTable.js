import React from 'react';
import ReactTable from 'react-table-6';

import 'react-table-6/react-table.css';
import datas from './UsersData';

const columns = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'Prénom',
        accessor: 'firstname',
      },
      {
        Header: 'Nom',
        accessor: 'lastname',
      },
    ],
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Adresse',
        accessor: 'address',
      },
      {
        Header: 'Téléphone',
        accessor: 'phoneNumber',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
  },
  {
    Header: 'Stats',
    columns: [
      {
        Header: 'Visits',
        accessor: 'visits',
      },
    ],
  },
];

class UsersTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: datas,
    };
  }

  render() {
    const { data } = this.state;
    const { usersBoard } = this.props;

    return (
      <div>
        <ReactTable
          data={usersBoard}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: '20px' }}>
                <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default UsersTable;
