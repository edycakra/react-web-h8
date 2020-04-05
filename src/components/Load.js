import React from 'react'
import Loader from 'react-loader-spinner'

export default function Load() {
    return (
        <div className="initialLoader">
            <Loader
                type="ThreeDots"
                height={200}
                width={200}
                color="#006400" //darkgreen 
                timeout={3000} //3 secs
            />
        </div>
    )
}
