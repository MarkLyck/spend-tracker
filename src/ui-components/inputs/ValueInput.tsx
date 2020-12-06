import React from 'react';
import styled from '@emotion/native'
import { Input } from '@ui-kitten/components';
import { Icon } from '../Icon'

const StyledInput = styled(Input)`
width: 160px;
`

export const ValueInput = ({ value, onChange }: any) => {
    const handleChange = (newValue: string) => {
        // if there's a decimal
        if (newValue.includes('.') || newValue.includes(',')) {
            let splitValue: string[] = []
            if (newValue.includes('.')) splitValue = newValue.split('.')
            if (newValue.includes(',')) splitValue = newValue.split(',')

            let decimalString = splitValue[1]

            if (decimalString.length > 2) {
                decimalString = decimalString.substring(0, 2)
            }

            onChange(`${splitValue[0]}.${decimalString}`)
        } else {
            // Don't allow 0000000.00
            if (newValue !== '0') {
                onChange(newValue)
            }
        }
    }

    return (
        <StyledInput
            placeholder='Value'
            value={value}
            onChangeText={handleChange}
            accessoryLeft={() => <Icon icon="dollarKey" />}
            keyboardType="decimal-pad"
            textStyle={{
                fontSize: 20
            }}
        />
    );
};