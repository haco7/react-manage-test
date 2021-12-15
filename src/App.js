import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '980707',
  'gender': '남',
  'job': '학생',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '미리내',
  'birthday': '980706',
  'gender': '남',
  'job': '교수',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '지석영',
  'birthday': '980707',
  'gender': '여',
  'job': '프로그래머',
}
];
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c =>{ return( <Customer key={c.id} id={c.id} image={c.image} birthday={c.birthday} gender={c.gender} job={c.job}/>)})
        }
      </div>
    );
  };
}

export default App;
