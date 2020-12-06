import React from 'react'
import { Platform } from 'react-native';
import iconMap from '../../common/iconMap'

export const CategoryIcon = ({ icon = "cash", size = 40 }) => {
    const Icon = iconMap[icon] ? iconMap[icon] : iconMap.cash

    // svg transformer does NOT work on WEB: https://github.com/kristerkari/react-native-svg-transformer/issues/70
    if (Platform.OS === 'web') return <img src={Icon} style={{ height: `${size}px`, width: `${size}px`, }} />

    return (
        <Icon height={size} width={size} />
    )
}

export default CategoryIcon