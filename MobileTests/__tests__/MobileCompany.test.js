

"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MobileCompany from '../components/MobileCompany';

configure({ adapter: new Adapter() });

describe('>>>MobileCompany-- Shallow Render REACT COMPONENTS', () => {
//shapshots
    let companyName='Velcom';
    let clientsArr=[ 
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:-1},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
    ];

    const companyComponent = <MobileCompany name={companyName} clients={clientsArr} />;
    const component = renderer.create(companyComponent);

    it('render company', () => {
        let componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
      });
    
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(companyComponent);
      });

    //setClientBalance
    it('set balance', () => {
        wrapper.instance().setBalance(101, -1);
        expect(wrapper.state('clients')[0].balance).toEqual(-1);
      });

    //edit FIO
    it('set FIO', () => {
        wrapper.instance().setClientFIO(101, {
          fam: 'fam',
          im: 'im',
          otch: 'otch',
        });
        expect(wrapper.state('clients')[0].fam).toEqual('fam');
        expect(wrapper.state('clients')[0].im).toEqual('im');
        expect(wrapper.state('clients')[0].otch).toEqual('otch');
      });

    //add new client
    it('add new client', () => {
        wrapper.instance().addClient();
        const clients = wrapper.state('clients');
        expect(clients.length).toEqual(5);
        expect(clients[clients.length-1].edited).toEqual(true);
      });

    //delete client
    it('delete client', () => {
        wrapper.instance().deleteClient("101");
        expect(wrapper.state('clients').length).toEqual(3);
       });

    //filter clients
      it('filter clients', () => {
        const event = {
          target: {value: 'active'}
        }
    
        wrapper.instance().clientFilter(event);
        expect(wrapper.state('notFilteredClients').length).toEqual(3);
        
        event.target.value = 'blocked';
        wrapper.instance().clientFilter(event);
        expect(wrapper.state('notFilteredClients').length).toEqual(1);
      });
    
    

});