import React from 'react'
import ActionBar from '../../organisms/ActionBar/ActionBar'

const HomePage = () => {
    const data = ['Short Videos','Story','Crime','Action','Animation','Horror']
    return (
        <div>
            
            <ActionBar listData={data} />
        </div>
    )
}

export default HomePage
