import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'font-awesome/css/font-awesome.css';
import _ from 'lodash';

import './App.css';

import accounts from './export/accounts.json';
import teams from './export/teams.json';
import trashpoints from './export/trashpoints.json';

const scoreByUser = (accountId) => {
  let score = 0;
  for (let trashpoint of trashpoints.rows) {
    if (trashpoint.value.createdBy && trashpoint.value.createdBy === accountId) {
      score++;
    }
  }
  return score;
};

const accountsData = _.chain(accounts.rows)
  .filter(o => !_.isEmpty(o.value.team))
  .map(function(account) {
    return {
      accountId: account.id,
      teamId: account.value.team,
      score: scoreByUser(account.id)
    };
  })
  .value();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const data = this.countStat();
    this.setState({data: data});
  }
  countStat() {
    const data = [];
    for (let team of teams.rows) {
      let accounts = _.filter(accountsData, ['teamId', team.id]);
      let score = 0;
      let users = accounts.length;
      for (let account of accounts) {
        score = score + account.score;
      }
      data.push({
        team: team.value.name,
        users: users,
        score: score
      });
    }
    return data;
  }
  render() {
    return (
      <div>
        <Navbar color="faded" expand="md">
          <Container>
            <NavbarBrand>World Cleanup Day Scores</NavbarBrand>
          </Container>
        </Navbar>
          <Container>
            {(() => {
              if (_.isEmpty(this.state.data)) {
                return (
                  <div>Please wait. Loading...</div>
                );
              } else {
                return (
                  <BootstrapTable
                    data={ this.state.data }
                    options={{
                      defaultSortName: 'team',
                      defaultSortOrder: 'asc',
                      sortIndicator: true
                    }}
                    version='4'
                  >
                    <TableHeaderColumn dataField='team' isKey={ true } dataSort={ true }>Team</TableHeaderColumn>
                    <TableHeaderColumn dataField='users' dataSort={ true }>Users in team</TableHeaderColumn>
                    <TableHeaderColumn dataField='score' dataSort={ true }>Score</TableHeaderColumn>
                  </BootstrapTable>
                );
              }
            })()}
          </Container>
      </div>
    );
  }
}

export default App;
