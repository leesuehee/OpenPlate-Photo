
import faker from 'faker';
import Enzyme from  'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Photo from '../client/src/components/Photo.jsx'; 

Enzyme.configure({ adapter: new Adapter() });

describe('photo components', () => {
  let testerData = [
    {
      txt_description: faker.lorem.words(), 
      src: faker.image.imageUrl(),
      pictureId: 1
    },
    {
      txt_description: faker.lorem.words(), 
      src: faker.image.imageUrl(),
      pictureId: 2
    },
    {
      txt_description: faker.lorem.words(), 
      src: faker.image.imageUrl(),
      pictureId: 3
    },
    {
      txt_description: faker.lorem.words(), 
      src: faker.image.imageUrl(),
      pictureId: 4
    }
  ]
  let wrapper = Enzyme.mount(<Photo photos = {testerData}/>);
  it('should render 4 photos', () => {
    expect(wrapper.find('.photogallery').children().length).toEqual(4);
  });

  it('should be contained in "photogallery div',() => {
    expect(wrapper.find('.photogallery'));
  })

})




// describe('menu component', () => {
//   const fake = {
//     Dinner: 'yes',
//     Lunch: 'also yes'
//   };
//   const wrapper = global.shallow(<MenuComponent menus={fake}/>);
//   it('should have correct number of buttons', () => {
//     expect(wrapper.is('div')).toEqual(true);
//     expect(wrapper.find('button').length).toBe(2);
//   });
//   it('should change state if button is pressed', () => {
//     const dinnerButton = wrapper.find('button').at(0);
//     const lunchButton = wrapper.find('button').at(1);
//     dinnerButton.simulate('click');
//     expect(wrapper.state().currentMenuName).toBe('Dinner');
//     lunchButton.simulate('click');
//     expect(wrapper.state().currentMenuName).toBe('Lunch');
//   });
//   it('should pass props onto subgroup component', () => {
//     //expect(wrapper.find()).toBe('yes');
//   });
// });