"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MobileClient from '../components/MobileClient';

configure({ adapter: new Adapter() });

describe('>>>MobileClient --- Shallow Render REACT COMPONENTS',()=>{
//shapshots
   const client1 = {
    id: 1,
    fam: 'fam1',
    im: 'im1',
    otch: 'otch1',
    balance: 0,
    edited: false,
  };
  const client2 = {
    id: 2,
    fam: 'fam2',
    im: 'im2',
    otch: 'otch2',
    balance: 1,
    edited: true,
  };
  const client3 = {
    id: 3,
    fam: 'fam3',
    im: 'im3',
    otch: 'otch3',
    balance: -1,
    edited: false,
  };
  const client1Component = <MobileClient 
  client={client1}
  onFIOChange={() => {}}
  onBalanceChange={() => {}}
  onDelete={() => {}}
   />;

   const client2Component = <MobileClient 
   client={client2}
   onFIOChange={() => {}}
   onBalanceChange={() => {}}
   onDelete={() => {}}
    />;

    const client3Component = <MobileClient 
    client={client3}
    onFIOChange={() => {}}
    onBalanceChange={() => {}}
    onDelete={() => {}}
     />;

     const component1 = renderer.create(client1Component);

     it('renders usual client', () => {
       let componentTree = component1.toJSON();
       expect(componentTree).toMatchSnapshot();
     });

     const component2 = renderer.create(client2Component);

    it('renders edited client', () => {
        let componentTree = component2.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

    const component3 = renderer.create(client3Component);

    it('renders blocked client', () => {
        let componentTree = component3.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

    //onDelete
    it('onDelete works', () => {
        const onDelete = jest.fn();
        const wrapper = shallow(
          <MobileClient client={client1} onDelete={onDelete}
            onFIOChange={() => { }}
            onBalanceChange={() => { }} />
        );
    
        wrapper.find('.delete').simulate('click');
    
        expect(onDelete).toBeCalledWith(client1.id);
      });
//onBalanceChange
    it('onBalanceChange works', () => {
        const onBalanceChange = jest.fn();
        const wrapper = shallow(
          <MobileClient client={client1} onDelete={() => { }}
            onFIOChange={() => { }}
            onBalanceChange={onBalanceChange} />
        );
    
        wrapper.find('.increase').simulate('click');
    
        expect(onBalanceChange).toBeCalledWith(client1.id, 1);
      });
    
      it('onBalanceChange works', () => {
        const onBalanceChange = jest.fn();
        const wrapper = shallow(
          <MobileClient client={client1} onDelete={() => { }}
            onFIOChange={() => { }}
            onBalanceChange={onBalanceChange} />
        );
    
        wrapper.find('.decrease').simulate('click');
    
        expect(onBalanceChange).toBeCalledWith(client1.id, -1);
      });

});
