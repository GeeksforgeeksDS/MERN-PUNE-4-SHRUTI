import React from 'react'
import './App.css';
// import Stylesheet from './components/Stylesheet'
// import Inline from './components/Inline'
// import './appStyles.css'

// import styles from './appStyles.module.css'
// import LifecycleA from './components/LifecycleA'
// import FragmentsDemo from './components/FragmentsDemo'
// import Table from './components/Table';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Counter from './components/Counter';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';

function App() {
  return (
    <div className="App">
      {/* <Stylesheet value={true} /> */}
        {/* <Inline /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <LifecycleA /> */}
        {/* <FragmentsDemo /> */}
        {/* <Table /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <PortalDemo /> */}
        {/* <Hero heroName="Batman" />
				<Hero heroName="Superman" /> */}
        {/* <Hero heroName="Joker" /> */}
				{/* <ErrorBoundary>
					<Hero heroName="Joker" />
				</ErrorBoundary> */}
        {/* <ClickCounter name='mithila' />
				<HoverCounter /> */}
        {/* <Counter
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter> */}
				{/* <Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter> */}
        {/* <UserProvider value='Shruti' >
          <ComponentC />
        </UserProvider> */}
    </div>
  );
}

export default App;
