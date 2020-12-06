import React from 'react'
import styled from '@emotion/native'
import { useQuery } from '@apollo/client'
import { Spinner, Text } from '@ui-kitten/components';
import { SectionGrid } from 'react-native-super-grid';
import { GET_HEAD_CATEGORIES_WITH_CATEGORIES } from '../../common/queries'
import CategoryBox from './CategoryBox'

const SectionHeader = styled.View`
    background: rgba(0,0,0,0.05);
    padding: 8px;
`

export const CategoryGrid = ({ onSelect }: any) => {
    const { data, loading, error } = useQuery(GET_HEAD_CATEGORIES_WITH_CATEGORIES)

    if (loading) return <Spinner />
    if (error) return <Text>{error.message}</Text>
    if (!data) return <Text>No data</Text>

    const sections = data.headCategoriesList.items.map((headCategory: any) => ({
        title: headCategory.name,
        data: headCategory.subCategories.items,
    }))

    return (
        // @ts-ignore
        <SectionGrid
            itemDimension={90}
            sections={sections}
            renderItem={({ item }) => <CategoryBox category={item} onPress={() => onSelect(item)} />}
            renderSectionHeader={({ section }) => (
                <SectionHeader>
                    <Text>{section.title}</Text>
                </SectionHeader>
            )}
        />
    )
}

export default CategoryGrid
