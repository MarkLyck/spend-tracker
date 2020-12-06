import React, { useState } from 'react';
import styled from '@emotion/native'
import { useMutation } from '@apollo/client'
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { Icon, Layout, Text, Button, Input } from '@ui-kitten/components';
import { CategorySelect, CategoryGrid } from '../components/Category'
import { ValueInput, DateSelector } from '../ui-components'
import { CREATE_TRANSACTION } from '../common/queries'
import { format } from 'date-fns'

const CategorySelectContainer = styled.View`
    margin: 24px;
`

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
`

const EditIcon = (props: any) => (
    <Icon {...props} name='edit-2' />
);


export const NewTransactionScreen = ({ navigation }: any) => {
    const [category, setCategory] = useState(undefined)
    const [value, setValue] = useState("")
    const [note, setNote] = useState("")
    const [date, setDate] = useState(new Date())
    const [datePickerVisible, setDatePickerVisible] = useState(false)
    const [createTransaction, { data, loading, error }] = useMutation(CREATE_TRANSACTION)

    const resetCategory = () => setCategory(undefined)

    const dismissKeyboardAndCalendar = () => {
        if (Platform.OS !== "web") Keyboard.dismiss()
        setDatePickerVisible(false)
    }

    const handleDatePickerVisible = (state: boolean) => {
        if (Platform.OS !== "web") Keyboard.dismiss()
        setDatePickerVisible(state)
    }

    const handleLog = () => {
        console.log("CREATE", {
            value,
            note,
            date,
            // @ts-ignore
            category: category.id
        })

        createTransaction({
            variables: {
                value: Number(value),
                note,
                date: format(date, 'yyyy-MM-dd'),
                // @ts-ignore
                category: category.id,
                budget: 'ckhwu0lw700kv08ju37jp08m9'
            }
        })
    }

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboardAndCalendar}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
                        <Text category='h5'>NEW TRANSACTION</Text>
                        <CategorySelectContainer>
                            <CategorySelect category={category} onPress={resetCategory} />
                        </CategorySelectContainer>
                        {!category && <CategoryGrid onSelect={(newCategory: any) => setCategory(newCategory)} />}
                        {category && <ValueInput value={value} onChange={setValue} />}
                        {category && <Input value={note} style={{ marginTop: 24 }} onChangeText={setNote} placeholder="Note..." accessoryLeft={EditIcon} />}
                        {category && <ButtonContainer>
                            <DateSelector date={date} setDate={setDate} visible={datePickerVisible} setVisible={handleDatePickerVisible} />
                            <Button onPress={handleLog} disabled={!value}>LOG</Button>
                        </ButtonContainer>}
                    </Layout>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};