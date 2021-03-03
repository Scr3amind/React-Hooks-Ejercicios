import React,{memo} from 'react'

export const Small = memo(({value}) => {
    console.log('Me llamé :(')
    return (
        <small>{value}</small>
    )
})
