import {useAppDispatch, useAppSelector} from '../app/hooks'


export function Counter() {
  const {value, status} = useAppSelector((state) => state.counter)

  const dispatch = useAppDispatch()
 
    const dispatchAction = (action:string, payload?: any)  => {
    console.log(action)
         dispatch({type:`counter/${action}`, payload})
  }
  
  return (
    <div className="Container">
       <h1 className="number">{status === 'idle' ? value : '...loading' }</h1>
       <div className="counters">
         <button className="counterButtons" onClick={() => dispatchAction('increment')} >Aumentar</button>
         <button className="counterButtons" onClick={() => dispatchAction('decrement')}>Diminuir</button>
         <button className="counterButtons" onClick={() => dispatchAction('incrementAsync')}>Aumentar Async</button>
       </div>
    </div>
  );
}


