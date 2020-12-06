import React from 'react'
import styled from '@emotion/native'
import CategoryIcon from './CategoryIcon'
import { Button, Icon } from '@ui-kitten/components';

export * from './CategoryIcon'

const PlusIcon = (props: any) => <Icon {...props} name='plus' />

interface CategorySelectType {
    category: any
    onPress?: any
}

export const CategorySelect = ({ category, onPress, ...props }: CategorySelectType) => {

    if (!category) {
        return (
            <Button style={{ backgroundColor: 'gray', borderColor: 'gray' }} onPress={onPress} accessoryLeft={PlusIcon} {...props}>
                CHOOSE CATEGORY
            </Button>
        )
    }

    return (
        <Button
            style={{
                backgroundColor: category.color,
                borderColor: category.color,
            }}
            onPress={onPress}
            accessoryLeft={() => <CategoryIcon icon={category.icon} />}
        >
            { category.name.toUpperCase()}
        </Button >
    )
}
