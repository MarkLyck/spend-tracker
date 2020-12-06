import React from 'react'
import styled from '@emotion/native'
import CategoryIcon from './CategoryIcon'
import { TouchableOpacity } from 'react-native';

export * from './CategoryIcon'
export * from './CategorySelect'
export * from './CategoryGrid'

const CATEGORY_SIZE = '100'

const Container = styled.View`
    background-color: ${(p: any) => p.background};
    height: ${CATEGORY_SIZE}px;
    width: ${CATEGORY_SIZE}px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.Text`
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    width: 100%;
    align-self: center;
    text-align: center;
    font-size: 14px;
    min-width: 200px;
    margin-bottom: 8px;
`

interface CategoryType {
    category: any;
    onPress?: () => void;
}

export const Category = ({ category, onPress }: CategoryType) => (
    <TouchableOpacity onPress={onPress} >
        <Container background={category.color} >
            <Title>{category.name}</Title>
            <CategoryIcon icon={category.icon} />
        </Container>
    </TouchableOpacity>
)
