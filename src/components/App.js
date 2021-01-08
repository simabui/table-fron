/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import Options from './Options/Options';
import Data from './Data/Data';
import API from '../api/agent';

const App = () => {
  const [stat, setState] = useState([]);
  const [filteredState, setfilteredState] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await API.Stat.getStats();
        setState(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function doesBoundItemMatchConditionEntry([key, valueList]) {
    const item = this;
    const itemValue = item[key];
    return (
      valueList.length === 0 ||
      (item.hasOwnProperty(key) && valueList.some(value => value === itemValue))
    );
  }
  function doesItemMatchConditionsOfBoundConfig(item) {
    // const config = this;

    return Object.entries(this).every(doesBoundItemMatchConditionEntry, item);
  }

  const handleFilter = configFilter => {
    const filteredStats = stat.filter(
      doesItemMatchConditionsOfBoundConfig,
      configFilter,
    );

    setfilteredState(filteredStats);
  };

  return (
    <>
      <div className="My-stat">
        <div className="My-stat__title">
          <h1>Історія розміщення моєї інформації</h1>
          <p>Увага були внесені зміни до Договору публічної оферти.</p>
        </div>
        <Loader isLoading={isLoading} />
        {stat.length > 1 && <Options stat={stat} handleFilter={handleFilter} />}
        <Data info={filteredState} />
      </div>
    </>
  );
};

export default App;
