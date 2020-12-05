import React from 'react'
import styled from '@emotion/native'
import CategoryIcon from './CategoryIcon'
import { TouchableOpacity } from 'react-native';

export * from './CategoryIcon'

const Container = styled.View`
    background-color: ${(p: any) => p.background};
    height: 48px;
    width: auto;
    padding: 0 24px;
    border-radius: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

const Title = styled.Text`
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    align-self: center;
    text-align: center;
    font-size: 14px;
    margin-right: 8px;
`

interface CategoryType {
    category: any
    onPress?: any
}

const noCategory = {
    name: "Choose a category",
    color: "gray",
    icon: "coffee"
}

export const CategorySelect = ({ category = noCategory, onPress }: CategoryType) => (
    <TouchableOpacity onPress={onPress} >
        <Container background={category.color} >
            <Title>{category.name}</Title>
            <CategoryIcon icon={category.icon} size={30} />
        </Container>
    </TouchableOpacity>
)
