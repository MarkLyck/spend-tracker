import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styled from '@emotion/native'
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { format } from 'date-fns'
import { CategorySelect, CategoryGrid } from '../components/Category'

const CategorySelectContainer = styled.View`
    margin: 24px;
`

const BackIcon = (props: any) => (
    <Icon {...props} name='arrow-back' />
);

export const NewTransactionScreen = ({ navigation }: any) => {
    const [category, setCategory] = useState(undefined)
    const [value, setValue] = useState("")
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))

    const navigateBack = () => navigation.goBack();
    const BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    const resetCategory = () => setCategory(undefined)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='New transaction' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h5'>NEW TRANSACTION</Text>
                <CategorySelectContainer>
                    <CategorySelect category={category} onPress={resetCategory} />
                </CategorySelectContainer>
                {!category && <CategoryGrid onSelect={(newCategory: any) => setCategory(newCategory)} />}
            </Layout>
        </SafeAreaView>
    );
};