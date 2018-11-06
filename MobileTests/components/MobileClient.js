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
      edited: PropTypes.bool.isRequired,
    }),
    onFIOChange: PropTypes.func.isRequired,
    onBalanceChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,  
  };
  
  state = {
    
      fam: this.props.client.fam,
      im: this.props.client.im,
      otch: this.props.client.otch,      
    
    balance: this.props.client.balance,
    edited: this.props.client.edited,
    active: this.props.client.balance >= 0,
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    var fam = this.state.fam;
    var im = this.state.im;
    var otch = this.state.otch;
    var newClient = newProps.client;
    if (this.fam != newClient.fam || im != newClient.im || otch != newClient.otch) {
      this.setState({
        
          fam: newClient.fam,
          im: newClient.im,
          otch: newClient.otch,
        
        edited: false,
      });
    }
    if (this.state.balance != newClient.balance) {
      this.setState({
        balance: newProps.client.balance,
        active: newProps.client.balance >= 0,
      });
    }
    if (this.state.edited != newClient.edited) {
      this.setState({
        edited: newClient.edited,
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
        active: true,
      });
      // console.log(this.state.balance)
    }
  }

  decreaseBalance = () => {
    this.props.onBalanceChange(this.props.client.id, --this.state.balance);
    if (this.state.balance < 0) {
      this.setState({
        active: false,
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
    
  }
  render() {

    console.log("MobileClient id="+this.props.client.id+" render");
    
    return (
      <div className='MobileClient'>{
        <div className='MobileClient'>
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
              <button className="decrease" onClick={this.decreaseBalance}>Decrease</button>
              <button className="increase" onClick={this.increaseBalance}>Increase</button>
              </div>
              <div className="MobileClientActive">
              {
                this.state.active
                  ?
                  <span className="MobileClientActiveActive">Active</span>
                  :
                  <span className="MobileClientActiveBlocked">Blocked</span>
              }
            </div>
            <div className="MobileClientDelete">
              <button className="delete"onClick={this.deleteClient}>Delete</button>
            </div>
        </div>
      }
       </div> 
        
      
    );

  }

}

export default MobileClient;
