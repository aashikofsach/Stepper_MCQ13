import './App.css'
import CheckoutSteps from './stepperData'

import CheckoutStepper from './components/CheckoutStepper'
function App() {

  return (
   <div>
    <h1>Stepper Trail Progress Bar</h1>
    <CheckoutStepper stepsConfig={CheckoutSteps}/>
   </div>
  )
}

export default App
