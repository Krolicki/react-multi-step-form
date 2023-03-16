import './Step.css'


export const Summary = ({data}) => {
    return (
        <div className='step'>
            <span className='step-title'>Welcome, {data.personal.nickname}.</span>
            <p className='step-summary-text'>You can now log in</p>
            <span className='step-buttons'>
                <button type="button" >
                    Log in
                </button>
            </span>
        </div>
    )
}