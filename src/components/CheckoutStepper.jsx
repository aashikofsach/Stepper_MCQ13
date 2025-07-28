import React, { useState } from 'react'

function CheckoutStepper({ stepsConfig = [] }) {
    const [step, setStep] = useState(4);
    const [completed, setCompleted] = useState(false)


    function handleNext()
    {
        console.log("mujhe kuch hua")
    }

    if (!stepsConfig.length)
        return <diV></diV>
    return (
        <>
            <div className='stepper'>
                {
                    stepsConfig.map((step, index) => <div key={step.name} className='step'>

                        <div className='step-number'>{index + 1}</div>
                        <div className='step-name'>{step.name}</div>

                    </div>)
                }
            </div>
            {
                !completed &&

                // completed ?  <button>Finish</button> :  <button>Next</button>
                <button className='btn' onClick={() => handleNext()}>{step === stepsConfig.length ? "Finish" : "Next"}</button>

            }
        </>

    )
}

export default CheckoutStepper