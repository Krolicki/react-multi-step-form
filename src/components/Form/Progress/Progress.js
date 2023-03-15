import './Progress.css'

export const Progress = ({currentStep}) => {
    return(
        <div className='progress'>
            <div className={`progress-item ${currentStep > 1 ? "completed" : currentStep === 1 ? "active" : ""}`} >
                <span className="progress-number" item-text="Account setup">1</span>
            </div>
            <div className={`progress-item ${currentStep > 2 ? "completed" : currentStep === 2 ? "active" : ""}`} >
                <span className="progress-number" item-text="Personal informations">2</span>
            </div>
            <div className={`progress-item ${currentStep > 3 ? "completed" : currentStep === 3 ? "active" : ""}`} >
                <span className="progress-number" item-text="Agreements">3</span>
            </div>
        </div>
    )
}