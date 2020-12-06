import React from 'react';
import { Calendar, Modal, Button, Icon, Card, Text } from '@ui-kitten/components';

const CalendarIcon = (props: any) => (
    <Icon {...props} name='calendar' />
);

export const DateSelector = ({ date = new Date(), setDate, visible, setVisible }) => {
    return (
        <React.Fragment>
            <Button onPress={() => setVisible(true)} accessoryLeft={CalendarIcon}>{date.toLocaleDateString()}</Button>

            <Modal
                visible={visible}
                backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', }}
                onBackdropPress={() => setVisible(false)}
            >
                <Card>
                    <Text category="h6" style={{ alignSelf: 'center', marginBottom: 24 }}> SELECT A DATE</Text>
                    <Calendar
                        date={date}
                        onSelect={nextDate => {
                            setDate(nextDate)
                            setVisible(false)
                        }}
                    />
                </Card>
            </Modal>

        </React.Fragment>
    );
};