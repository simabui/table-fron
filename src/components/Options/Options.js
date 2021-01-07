import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'react-bootstrap';
import Select from '../Select/Select';
import css from './Options.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function filterDuplicate(arr) {
  return arr.filter((elem, index, array) => array.indexOf(elem) === index);
}

const INITIAL_STATE = {
  publicationType: [],
  termType: [],
  reportGroup: [],
  reportState: [],
  reportFormat: [],
};

const Options = ({ stat, handleFilter }) => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    handleFilter(form);
  }, [form]);

  const publicationTypes = filterDuplicate(
    stat.map(data => data.publicationType),
  );
  const termTypes = filterDuplicate(stat.map(data => data.termType));
  const reportGroups = filterDuplicate(stat.map(data => data.reportGroup));
  const reportStates = filterDuplicate(stat.map(data => data.reportState));
  const reportFormats = filterDuplicate(stat.map(data => data.reportFormat));

  const handleSelect = value => {
    setForm({ ...form, ...value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setForm(INITIAL_STATE);
    setReset(!reset);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <Row style={{ justifyContent: 'space-around', alignItems: 'flex-end' }}>
          <Col xs={12} sm={6} md={2}>
            <Select
              type="publicationType"
              name="Тип публікації"
              options={publicationTypes}
              handleSelect={handleSelect}
              reset={reset}
            />
          </Col>
          <Col xs={12} sm={6} md={2}>
            <Select
              type="termType"
              name="Періодичність"
              options={termTypes}
              handleSelect={handleSelect}
              reset={reset}
            />
          </Col>
          <Col xs={12} sm={6} md={2}>
            <Select
              type="reportGroup"
              name="Категорія субєкта"
              options={reportGroups}
              handleSelect={handleSelect}
              reset={reset}
            />
          </Col>
          <Col xs={12} sm={6} md={2}>
            <Select
              type="reportState"
              name="Статус"
              options={reportStates}
              handleSelect={handleSelect}
              reset={reset}
            />
          </Col>
          <Col xs={12} sm={6} md={2}>
            <Select
              type="reportFormat"
              name="Тип Файлу"
              options={reportFormats}
              handleSelect={handleSelect}
              reset={reset}
            />
          </Col>
          <Col xs={12} sm={12} md={2}>
            <div style={{ textAlign: 'center' }}>
              <Button variant="contained" color="secondary" type="submit">
                СКИНУТИ
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
};

Options.propTypes = {
  stat: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Options;
