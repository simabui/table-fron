/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState, lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import API from '../api/agent';

const AsyncOptions = lazy(() =>
  import(/* webpackChunkName: "options" */ './Options/Options'),
);
const AsyncData = lazy(() =>
  import(/* webpackChunkName: "data" */ './Data/Data'),
);

const App = () => {
  const [stat, setState] = useState([]);
  const [filteredState, setfilteredState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await API.Stat.getStats();
      setState(data);
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
        <Suspense fallback={<Loader />}>
          {stat.length > 1 && (
            <AsyncOptions stat={stat} handleFilter={handleFilter} />
          )}
          <AsyncData info={filteredState} />
        </Suspense>
      </div>
    </>
  );
};

export default App;
