import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Firestore, RealTime, Storage } from "../../services/firebase"

import { useIsFocused } from "@react-navigation/native"

import { FontAwesome, Feather, FontAwesome5  } from '@expo/vector-icons'; 
import ListDisciplinas from "../../components/ListDisciplinas"

import { 
    Container,
    ContainerHeader,
    TextDisciplina,
    TextCont,

    ContainerFiltros,
    FiltroNome,
    InputFiltro,
    ButtonSearch,

    Filtros,
    SelectProfessores,
    SelectCursos,
    SelectAtivos,

    GroupButtons,
    NewDisciplina,
    TextNew,
    Imprimir,
    TextImprimir,
} from './styles';

const Disciplinas = () => {

    const idFocused = useIsFocused()
    const [data, setData] = useState([])

    useEffect(() => {

        const response = Firestore.collection("disciplinas")
                .onSnapshot((querySnapshot) => {
                var resp = [];
                querySnapshot.forEach((doc) => {
                    
                    resp.push({ id: doc.id ,...doc.data(), prof_id: undefined });
                });
                console.log("Resposta: ", resp);
                setData(resp);
            });

        return () => response();

    }, [idFocused])

    return (
        <Container>

            <ContainerHeader>
                <TextDisciplina>
                    Disciplinas
                </TextDisciplina>
                <TextCont>
                    { data.length }
                </TextCont>
            </ContainerHeader>

            <ContainerFiltros>
            
                <FiltroNome>
                    <InputFiltro placeholder="Nome da disciplina..." />
                    <ButtonSearch onPress={() => alert("Search")}>
                        <Feather name="search" size={24} color="white" />
                    </ButtonSearch>
                </FiltroNome>

                <Filtros>

                    <SelectProfessores>
                    
                    </SelectProfessores>

                    <SelectCursos>
                    
                    </SelectCursos>

                    <SelectAtivos>
                    
                    </SelectAtivos>
                    
                </Filtros>

            </ContainerFiltros>

            <GroupButtons>
            
                <NewDisciplina>
                    <FontAwesome5 name="list-alt" size={18} color="white" />
                    <TextNew>Nova Disciplina</TextNew>
                </NewDisciplina>

                <Imprimir>
                    <FontAwesome5 name="print" size={18} color="black" />
                    <TextImprimir>Imprimir</TextImprimir>
                </Imprimir>
            
            </GroupButtons>

            <ListDisciplinas data={data} />

        </Container>
    );
}

export default Disciplinas;