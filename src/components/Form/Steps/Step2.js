import './Step.css'

export const Step2 = () => {
    return(
        <div className='step'>
            <span className='step-title'>Personal informations</span>
            <input
                type='text'
                name='nickname'
                placeholder=' '
            />
            <label for="nickname">Nickname</label>
            <input
                type='text'
                name='name'
                placeholder=' '
            />
            <label for="name">Name</label>
            <input
                type='text'
                name='surname'
                placeholder=' '
            />
            <label for="surname">Surname</label>
            <span className='step-birth-date'>
                <p>Birth date</p>
                <span>
                    <input
                        type='number'
                        name='day'
                        placeholder=' '
                    />
                    <label for="day">DD</label>
                    <input
                        type='number'
                        name='month'
                        placeholder=' '
                    />
                    <label for="month">MM</label>
                    <input
                        type='number'
                        name='year'
                        placeholder=' '
                    />
                    <label for="year">YYYY</label>
                </span>
            </span>
        </div>
    )
}