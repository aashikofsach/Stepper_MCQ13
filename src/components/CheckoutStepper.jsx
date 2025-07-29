import React, { useState } from 'react'

function CheckoutStepper({ stepsConfig = [] }) {
    const [stepUser, setStepUser] = useState(1);
    const [completed, setCompleted] = useState(false)

    let ActiveComponent = stepsConfig[stepUser-1]?.Component;

    function calculateProgressBarWidth()
    {
        console.log(Math.ceil(((stepUser-1)/(stepsConfig.length-1))*100))
        if(Math.ceil(((stepUser-1)/(stepsConfig.length-1))*100) == 34)
            return 36;
        return Math.ceil(((stepUser-1)/(stepsConfig.length-1))*100)

    }


    function handleNext()
    {
        // console.log("mujhe kuch hua")
        setStepUser((prev)=> {
            if(prev=== stepsConfig.length)
            {
                setCompleted(true)
                return prev
            }
            else
            {
                return prev + 1
            }
        })
    }

    if (!stepsConfig.length)
        return <diV></diV>
    return (
        <>
            <div className='stepper'>
                {
                    stepsConfig.map((step, index) => <div key={step.name} className={`step ${stepUser === index +1 ? "active" : ""} ${stepUser> index+1? "complete" : ""}`}>

                        <div className='step-number'>{stepUser > index +1 ? <span>&#10003;</span> : index+1}</div>
                        <div className='step-name'>{step.name}</div>

                    </div>)
                }
                <div className="progress-bar">
                    <div className={`progress`} style={{width : `${calculateProgressBarWidth()}%`}}></div>
                </div>
            </div>

           <ActiveComponent/>
            {
                !completed &&

                // completed ?  <button>Finish</button> :  <button>Next</button>
                <button className='btn' onClick={() => handleNext()}>{stepUser === stepsConfig.length ? "Finish" : "Next"}</button>

            }
        </>

    )
}

export default CheckoutStepper