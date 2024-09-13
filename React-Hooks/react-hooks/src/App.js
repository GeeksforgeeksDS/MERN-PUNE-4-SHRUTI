import React, { useReducer } from 'react'
import './App.css';
// import ClassCounter from './components/state-hook/ClassCounter';
// import ClassCounterTwo from './components/state-hook/ClassCounterTwo';
// import HookCounter from './components/state-hook/HookCounter';
// import HookCounterTwo from './components/state-hook/HookCounterTwo';
// import HookCounterThree from './components/state-hook/HookCounterThree';
// import HookCounterFour from './components/state-hook/HookCounterFour';
// import ClassCounterOne from './components/effect-hook/ClassCounterOne';
// import HookCounterOne from './components/effect-hook/HookCounterOne';
// import ClassMouse from './components/effect-hook/ClassMouse';
// import HookMouse from './components/effect-hook/HookMouse';
// import MouseContainer from './components/effect-hook/MouseContainer';
// import IntervalClassCounter from './components/effect-hook/IntervalClassCounter';
// import IntervalHookCounter from './components/effect-hook/IntervalHookCounter';
// import DataFetching from './components/effect-hook/DataFetching';
// import ComponentC from './components/context-hook/ComponentC';
// import FocusInput from './components/ref-hook/FocusInput';
// import ClassTimer from './components/ref-hook/ClassTimer';
// import HookTimer from './components/ref-hook/HookTimer';
// import CounterOne from './components/reducer-hook/CounterOne';
// import CounterThree from './components/reducer-hook/CounterThree';
// import CounterTwo from './components/reducer-hook/CounterTwo';
// import ComponentA from './components/reducer-hook/ComponentA';
// import ComponentB from './components/reducer-hook/ComponentB';
// import ComponentsC from './components/reducer-hook/ComponentsC';
// import DataFetchingOne from './components/reducer-hook/DataFetchingOne';
// import DataFetchingTwo from './components/reducer-hook/DataFetchingTwo';
// import ParentComponent from './components/callback-hook/ParentComponent';
// import Counter from './components/memo-hook/Counter';
// import DocTitleOneC from './components/custom-hook/DocTitleOneC';
// import DocTitleTwoC from './components/custom-hook/DocTitleTwoC';
// import CounterOneC from './components/custom-hook/CounterOneC';
// import CounterTwoC from './components/custom-hook/CounterTwoC';
// import UserForm from './components/custom-hook/UserForm';

// *context-hook*
/**
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
* */

// *reducer-hook*
/** 
const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}
export const CountContext = React.createContext()
**/

function App() {
  // *reducer-hook with useContext*
  // const [count, dispatch] = useReducer(reducer, initialState)
 
  return (
    // *reducer-hook with useContext*
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    
    <div className="App">
      {/* ***********************state-hook**************** */}
      {/* <ClassCounter />
      <ClassCounterTwo />
      <HookCounter />
      <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* ***********************effect-hook**************** */}
      {/* <ClassCounterOne />
      <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching />s */}
      {/* ***********************context-hook**************** */}
      {/* <UserContext.Provider value={'Viaana'}>
        <ChannelContext.Provider value={'Nursery_Playgroup'}>
          <ComponentC />
        </ChannelContext.Provider>
			</UserContext.Provider> */}
      {/* ***********************ref-hook**************** */}
      {/* <FocusInput /> */}
      {/* <ClassTimer />
      <HookTimer /> */}
      {/* ***********************reducer-hook**************** */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* reducer-hook with useContext
        {count}
      <ComponentA />
      <ComponentB />
      <ComponentsC /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* ***********************callback-hook**************** */}
      {/* <ParentComponent /> */}
      {/* ***********************memo-hook**************** */}
      {/* <Counter /> */}
      {/* ***********************custom-hook**************** */}
      {/* <DocTitleOneC />
      <DocTitleTwoC /> */}
      {/* <CounterOneC />
      <CounterTwoC /> */}
      <UserForm />

    </div>
//  </CountContext.Provider>
  );
}

export default App;
