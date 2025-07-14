import { workoutProgram as training__plan } from '../utils/index.js'
import WorkoutCard from './WorkoutCard.jsx'

export default function Grid() {
    const isLocked = true 
    const selected_workout = 0 


    return (
        <div className="training-grid-plan">
            {Object.keys(training__plan).map((workout, workoutIndex) => {
                const type =  workoutIndex % 3 === 0 ?
                    'Push' : 
                        workoutIndex % 3 ===1 ? 
                            'Pull' :
                            'Legs'
                            
                 const trainingPlan = training__plan[workoutIndex]
                 
                 if (workoutIndex === selected_workout) {
                    return (
                        <WorkoutCard key={workoutIndex}/>
                    )
                 }
                 
                 return (                
                    <button className={'card plan-card ' + (isLocked ? 'inactive' 
                    :'')} key={workoutIndex}>

                        <div className='plan-card-header'>
                            <p>Day {((workoutIndex / 8) <= 1) ? '0' + (workoutIndex +1):
                            workoutIndex + 1}</p>
                        </div>
                        {isLocked ? (
                            <i className="fa-solid fa-lock"></i>
                        ) : (
                            workoutIndex % 3 === 0 ? (
                                <i className="fa-solid fa-dumbbell"></i>                      
                            ) : (
                                workoutIndex % 3 === 1 ? (
                                    <i className="fa-solid fa-weight-hanging"></i>
                                ) : (
                                    <i className="fa-solid fa-bolt"></i>
                                )
                        ))}
                        <div className="plan-card-header">
                            <h4><b>{type}</b></h4>
                        </div>                       
                    </button>
                )
            })}
        </div>
    )
}