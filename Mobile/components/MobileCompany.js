﻿import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        shown: PropTypes.bool,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients.map((v) => {
      v.edited = false;
      return v;
    }),
    notFilteredClients: this.props.clients.map((v) => {
      v.edited = false;
      return v;
    }),
  };

  setName = (EO) => {
    this.setState({name: EO.target.value});
  };

 
  
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    let newClient;
    let newFilteredClients = [...this.state.notFilteredClients];

    newClients.forEach( (c,i) => {
      if ( c.id==clientId ) {
        newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed ) {
      newFilteredClients.forEach((c, i) => {
        if (c.id == clientId) {
          newFilteredClients[i] = newClient;
        }
      });
      this.setState({
        clients: newClients,
        notFilteredClients: newFilteredClients,
      });
    } 
    };
  setClientFIO  = (clientId,newFIO) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    let newClient;
    let newFilteredClients = [...this.state.notFilteredClients];
    newClients.forEach( (c,i) => {
      if (c.id == clientId) {
        newClient = { ...c };
        newClient.edited = false;

        if (c.fam != newFIO.fam || c.im != newFIO.im || c.otch != newFIO.otch) {
            newClient.fam = newFIO.fam;
            newClient.im = newFIO.im;
            newClient.otch = newFIO.otch;
        }
        newClients[i] = newClient;
        changed = true;
      }
    } );
    if (changed) {
      newFilteredClients.forEach((c, i) => {
        if (c.id == clientId) {
          newFilteredClients[i] = newClient;
        }
      });

      this.setState({
        clients: newClients,
        notFilteredClients: newFilteredClients,
      });
    }
  };
  addClient = () => {
    let currentClients = this.state.clients;
    let newClientId = currentClients[currentClients.length - 1].id + 1;
    let newClients = [...this.state.clients];
    let newFilteredClients = [...this.state.notFilteredClients];
    let newClient = {
      id: newClientId,
      fam: "",
      im: "",
      otch: "",
      balance: this.state.filter == "blocked" ? -1 : 0,
      edited: true,
    }
    newClients.push(newClient);
    newFilteredClients.push(newClient);
    this.setState({ 
      clients: newClients,
      notFilteredClients: newFilteredClients });
    // console.log(this.state.notFilteredClients);
  } 

  deleteClient = (clientId) => {
    let newClients=[...this.state.cliens];
    let newFilteredClients = [...this.state.notFilteredClients];
    newClients.forEach((c, i) => {
      if (c.id == clientId) {
        newClients.splice(i, 1);
        return;
      }
    });
    newFilteredClients.forEach((c, i) => {
      if (c.id == clientId) {
        newFilteredClients.splice(i, 1);
        return;
      }
    });

    this.setState({
      clients: newClients,
      notFilteredClients: newFilteredClients,
    });
  };
  
  clientFilter = (EO) => {
    var newFilter = EO.target.value;
    if (newFilter !== this.state.filter) {
      let clients = this.state.clients;
      let filteredClients = [];

      if (newFilter == "all") {
        filteredClients = [...clients];
      } else if (newFilter == "active") {
        filteredClients = clients.filter((c) => c.balance >= 0);
      } else if (newFilter == "blocked") {
        filteredClients = clients.filter((c) => c.balance < 0);
      }

      this.setState({
        filter: newFilter,
        notFilteredClients: filteredClients,
      });
      console.log(this.state.notFilteredClients);
    }
  }
  
  
  render() {

    console.log("MobileCompany render");

    var clients=this.state.notFilteredClients.map(client => {
        
        return <MobileClient 
        key={client.id} 
        client={client}
        onFIOChange={this.setClientFIO}
        onBalanceChange={this.setBalance}
        onDelete={this.deleteClient}
         />;
      }
    );

    return (
      <div className='MobileCompany'>
         <div className="MobileCompanyTitle">
          <div>
            <input type="button" value="Velcom" onClick={this.setName} />
            <input type="button" value="MTC" onClick={this.setName} />
          </div>
          <div className="">
          <label htmlFor="filter">Show</label>
            <select id="filter" value={this.state.filter} onChange={this.clientFilter}>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
        </div>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clients}
        </div>
        <button className="MobileNewClientButton" onClick={this.addClient}>
          Add new client
        </button>
      </div>
    )
    ;

  }

}

export default MobileCompany;
