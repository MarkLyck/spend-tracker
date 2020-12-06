import React from 'react'
import styled from '@emotion/native'
import { TouchableOpacity } from 'react-native';
import { Text } from '@ui-kitten/components';
import CategoryIcon from './CategoryIcon'

const Container = styled.View`
    background-color: ${(p: any) => p.background};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
`

const Label = styled(Text)`
    color: white;
    margin-top: 8px;
`

const CategoryBox = ({ category, onPress }: any) => (
    <TouchableOpacity onPress={onPress} >
        <Container background={category.color}>
            <CategoryIcon icon={category.icon} />
            <Label category="label">{category.name.toUpperCase()}</Label>
        </Container>
    </TouchableOpacity>
)

export default CategoryBox
