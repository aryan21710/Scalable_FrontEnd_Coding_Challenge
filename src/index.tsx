import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {sum,displayObj} from './common/utils'
import {myObj} from './common/constants';
import {Container} from './components/Container';

const App:React.FC = () => {
    const [count,setCount]=useState(0);
    const onIncrementCount:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void=()=>setCount(count+1);

	return (
		<div>
			<p>{`output of sum is :- ${sum([10, 20, 30, 40])}`}</p>
			<hr></hr>
			<p>PASSING OBJECT TO A FUNCTION</p>
			{displayObj(myObj)
				.split('.')
				.map((_,idx) => (
					<p key={idx}>{_}</p>
				))}
			<hr></hr>
            <h2>REACT INCREMENT COUNT</h2>
            <hr></hr>
                <p>COUNT VALUE IS:- {count}</p>
                <button onClick={onIncrementCount}>+</button>
            <hr></hr>
           
            <Container/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
