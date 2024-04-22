import { useState } from 'react';
import { supabase } from './supabaseClient';
import './index.css';

function Dorms() {
  const [dormInfo, setMyDorms] = useState([]);

  useState(() => {
    async function getDorms() {
      let { data: sports } = await supabase
        .from('sports')
        .select('*');
      setMyDorms(sports);
    }
    getDorms();
  });

  return (
    <>
      {dormInfo
        .filter(d => [1].includes(d.id))
        .map(d => (
          <div key={d.id}>
            <h1>The city is {d.city}</h1>
            <h2>NFL team: {d.city} {d.nfl}</h2>
            <h2>NBA team: {d.city} {d.nba}</h2>
            <h2>MLB team: {d.city} {d.mlb}</h2>
            <h2>NHL team: {d.city} {d.nhl}</h2>
          </div>
        ))}
    </>
  );
}

function App() {
  return <Dorms />;
}

export default App;
