import './Step.css'

export const Step3 = () => {
    return(
        <div className='step'>
            <span className='step-title'>Agreements</span>
            <span className='step-checkbox'>
                <input
                    type='checkbox'
                    name='terms-consent'
                />
                <label htmlFor='terms-consent'>I have read and accept the terms of service</label>
            </span>
            <span className='step-checkbox'>
                <input
                    type='checkbox'
                    name='data-consent'
                />
                <label htmlFor='data-consent'>I consent to the processing of my personal data necessary for registration</label>
            </span>
            <span className='step-checkbox'>
                <input
                    type='checkbox'
                    name='marketing-consent'
                />
                <label htmlFor='marketing-consent'>(optional) I consent to the processing of my personal data for marketing purposes</label>
            </span>
            <span className='step-buttons'>
                    <button type="button" >Previous step</button>
                    <button type="button" >Submit</button>
            </span>
        </div>
    )
}