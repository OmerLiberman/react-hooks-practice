import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = async ingredient => {
    await fetch('https://react-hooks-5c0a9.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {'Content-Type': 'application/json'},
    }).then(res => {
      return res.json();
    }).then(resData => {
          setUserIngredients(userIngredients => [
            ...userIngredients,
            {id: resData.name, ...ingredient}]);
        },
    );
  };

  const removeIngredientHandler = iid => {
    setUserIngredients(userIngredients =>
        userIngredients.filter(ingredient => ingredient.id !== iid),
    );
  };

  return (
      <div className="App">
        <IngredientForm onAddIngredient={addIngredientHandler}/>
        <section>
          <Search/>
          <IngredientList ingredients={userIngredients}
                          onRemoveItem={removeIngredientHandler}/>
        </section>
      </div>
  );
}

export default Ingredients;
