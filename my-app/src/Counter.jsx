import {useState} from 'react';

//сделать функциональный компонент из классового
// class Counter extends Component {
//   state = {
//     count: 0
//   };
//   handleClick = () => {
//     this.setState(({ count }) => ({
//       count: count + 1
//     }));
//   };
//   render() {
//     return <button onClick={this.handleClick}>{this.state.count}</button>;
//   }
// }

function Counter () {
    const [count, setCount] = useState(0);
    
     let handleClick = () => {
          let currentCount = count;
          currentCount++;
          setCount (currentCount);
        };
      return (<button onClick={handleClick}> {count} </button>);
    };  
export default Counter;