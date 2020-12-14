import React from 'react';
import './App.css';


const names = ['sasha', 'masha', 'dasha', 'pasha', 'glasha']
const friends = [{
    name: 'sasha',
    age: 10
}, {
    name: 'masha',
    age: 11
}, {
    name: 'dasha',
    age: 14
}, {
    name: 'valera',
    age: 17
}, {
    name: 'vasilii',
    age: 20
},
]
const elemets = names.map(e => <li key={e + e}>{e}</li>)
const users = friends.map(u => <li>{u.name} {u.age}</li>)

function App() {
    return (
        <div>
            {elemets}
            <hr/>
            {users}
        </div>
    );
}

export default App;
