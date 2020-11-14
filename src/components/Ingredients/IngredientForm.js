import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [state, setState] = useState({title: '', amount: ''});

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({title: state.title, amount: state.amount});
    // ...
  };

  return (
      <section className="ingredient-form">
        <Card>
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <label htmlFor="title">Name</label>
              <input
                  type="text"
                  id="title"
                  value={state.title}
                  onChange={event => setState({...state, title: event.target.value})}/>
            </div>
            <div className="form-control">
              <label htmlFor="amount">Amount</label>
              <input
                  type="number"
                  id="amount"
                  value={state.amount}
                  onChange={event => setState({...state, amount: event.target.value})}/>
            </div>
            <div className="ingredient-form__actions">
              <button type="submit" onClick={submitHandler}>Add Ingredient</button>
            </div>
          </form>
        </Card>
      </section>
  );
});

export default IngredientForm;
