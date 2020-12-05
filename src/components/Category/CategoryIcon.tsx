import React from 'react'
import iconMap from '../../common/iconMap'

export const CategoryIcon = ({ icon = "coffee", size = 40 }) => {
    const Icon = iconMap[icon] ? iconMap[icon] : iconMap.cash

    return (
        <Icon height={size} width={size} />
    )
}

export default CategoryIcon