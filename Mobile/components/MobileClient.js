import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      shown: PropTypes.bool.isRequired,
      edited: PropTypes.bool,
    }),
       
  };
  static defaultProps = {
    client: {
      edited: false,
    }
  }
  state = {
    FIO: {
      fam: this.props.client.fam,
      im: this.props.client.im,
      otch: this.props.client.otch,      
    },
    balance: this.props.balance,
    edited: this.props.client.edited,
    activeClient: this.props.client.balance >= 0,
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    var newClient = newProps.client;
    if (this.state.FIO.fam != newClient.fam || this.state.FIO.im != newClient.im || this.state.FIO.otch != newClient.otch) {
      this.setState({
        FIO: {
          fam: newClient.fam,
          im: newClient.im,
          otch: newClient.otch,
        },
        edited: false,
      });
    }
    if (this.state.balance != newClient.balance) {
      this.setState({
        balance: newProps.client.balance,
        isActive: newProps.client.balance >= 0,
      });
    }
  };
  editButton = () => {
    this.setState({ edited: true });
  }
  increaseBalance = () => {
    this.props.onBalanceChange(this.props.client.id, ++this.state.balance);
    if (this.state.balance >= 0) {
      this.setState({
        activeClient: true,
      });
    }
  }

  decreaseBalance = () => {
    this.props.onBalanceChange(this.props.client.id, --this.state.balance);
    if (this.state.balance < 0) {
      this.setState({
        activeClient: false,
      });
    }
  }
  deleteClient = () => {
    this.props.onDelete(this.props.client.id);
  }
  saveForm = (EO) => {
    EO.preventDefault();
    var clientForm = EO.target;
    var FIO = {
      fam: clientForm.fam.value,
      im: clientForm.im.value,
      otch: clientForm.otch.value,
    };
    this.props.onFIOChange(this.props.client.id, FIO);
    this.setState({
       edited: false 
      });
  }
  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <div className='MobileClient'>{
        this.props.client.shown && <div className='MobileClient'>
            <span className="MobileClientId">{this.props.client.id}</span>
            <div className='MobileClientFio'>
              {
                this.state.edited
                  ?
                  <form onSubmit={this.saveForm} className="MobileClientFioForm">
                    <input type="text" defaultValue={this.state.fam} name="fam" />
                    <input type="text" defaultValue={this.state.im} name="im" />
                    <input type="text" defaultValue={this.state.otch} name="otch" />
                    <input type="submit" value="Save" />
                  </form>
                  :
                  <div className="MobileClientFioContainer">
                    <span>{this.state.fam + " " + this.state.im + " " + this.state.otch}</span>
                    <button onClick={this.editButton}>Edit</button>
                    </div>
              }
              </div>
              <div>
              <span className="MobileClientBalance">{this.state.balance}</span>
              <button onClick={this.decreaseBalance}>Decrease</button>
              <button onClick={this.increaseBalance}>Increase</button>
              </div>
              <div className="MobileClientActive">
              {
                this.state.activeClient
                  ?
                  <span className="MobileClientActiveActive">Active</span>
                  :
                  <span className="MobileClientActiveBlocked">Blocked</span>
              }
            </div>
            <div className="MobileClientDelete">
              <button onClick={this.deleteClient}>Delete</button>
            </div>
        </div>
      }
       </div> 
        
      
    );

  }

}

export default MobileClient;
