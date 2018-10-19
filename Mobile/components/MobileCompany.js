import React from 'react';
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
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients.map((v) => {
      v.shown = true;
      return v;
    }),
    filteredClients: this.props.clients.map((v) => {
      v.shown = true;
      return v;
    }),
  };

  setName = (EO) => {
    this.setState({name:EO.target.value});
  };

 
  
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  
  setClientFIO  = (clientId,newFIO) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId &&(c.fam != newFIO.fam || c.im != newFIO.im || c.otch != newFIO.otch) ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.fam = newFIO.fam;
        newClient.im = newFIO.im;
        newClient.otch = newFIO.otch;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };

  addClient = () => {
    let currentClients = this.state.clients;
    let newClientId = currentClients[currentClients.length - 1].id + 1;
    let newClients = [...this.state.clients];
    let newClient = {
      id: newClientId,
      fam: "",
      im: "",
      otch: "",
      balance: this.state.filter == "blocked" ? -1 : 0,
      edited: true,
      shown: true,
    }
    newClients.push(newClient);
    this.setState({ clients: newClients });
  } 

  deleteClient = (clientId) => {
    let newClients=[...this.state.clients];
    newClients.forEach((c, i) => {
      if (c.id == clientId) {
        newClients.splice(i, 1);
        return;
      }
    });
    this.setState({ clients: newClients });
  };
  
  filterAll = () => {
    this.setState({ clients: this.state.filteredClients })
}

filterActive = () => {

    let active = this.state.filteredClients
    active = active.filter((v) => {
       (v.balance >= 0)? true : false;
        
    });
    this.setState({ clients: active })
}

filterBlocked = () => {
    let blocked = this.state.filteredClients
    blocked = blocked.filter((v) => {
      (v.balance < 0)? true : false;
        
    });

    this.setState({ clients: blocked })

}
  
  render() {

    console.log("MobileCompany render");

    var clients=this.state.clients.map(client => {
        
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
            
            
              <button onClick={this.filterAll}>All</button>
              <button onClick={this.filterActive}>Active</button>
              <button onClick={this.filterBlocked}>Blocked</button>
            
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
