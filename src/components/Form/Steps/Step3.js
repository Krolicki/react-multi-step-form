import './Step.css'

export const Step3 = () => {
    return(
        <div className='step'>
            <span className='step-title'>Agreements</span>
            <input
                type='email'
                name='mail'
                placeholder=' '
            />
            <label for="mail">Email Address</label>
            <input
                type='password'
                name='password'
                placeholder=' '
            />
            <label for="password">Password</label>
            <input
                type='password'
                name='confirmPass'
                placeholder=' '
            />
            <label for="confirmPass">Confirm Password</label>
            <span className='step-buttons'>
                <button type="button" >Previous step</button>
                <button type="button" >Next step</button>
            </span>
        </div>
    )
}