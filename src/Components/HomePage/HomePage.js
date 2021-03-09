import React from 'react'
import HeaderBar from '../../organisms/ActionBar/ActionBar'
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
