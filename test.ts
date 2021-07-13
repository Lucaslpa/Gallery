const state = {
    todos: [{
      text: 'Eat food',
      completed: true
    }, {
      text: 'Exercise',
      completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
  }

 const reducerTodos = (state, action) =>  {
  
      switch(action.type) {
          case 'ADD_TODO': {
            return [...state, {text: action.text, completed: false}]
          }
          default: {
            return state
          }
      }
  }

  /* action */ 
  const addTodo = { type: 'ADD_TODO', text: 'Go to swimming pool' }

  const newState = reducerTodos(state.todos, addTodo)
  console.log(newState)