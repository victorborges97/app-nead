import React from 'react';
import { FlatList, Text, View } from 'react-native';
import DisciplinaItem from '../DisciplinaItem';

import { Firestore } from '../../services/firebase';

import { Container } from './styles';

const dataTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const ListDisciplinas = ({ data = dataTest }) => {

    const updateItem = (id, name, value) => {

        const newValue = {  
            [name]: value
        }

        //Fucionando mais dando log de warning
        Firestore.collection("disciplinas")
            .doc(id)
            .update(newValue)
    }

    return (
        <Container>
            <FlatList
                data={data}
                keyExtractor={(item, index) => String(index + 1)}
                renderItem={({ item }) => (
                    <DisciplinaItem UpdateItem={updateItem} item={item} />
                )}
                contentContainerStyle={{
                    marginBottom: 20,
                }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 2, backgroundColor: "#686868" }}></View>
                )}
            />
        </Container>
    )
}

export default ListDisciplinas;