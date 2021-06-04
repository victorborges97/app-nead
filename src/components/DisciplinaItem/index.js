import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { FontAwesome5 } from '@expo/vector-icons';

import {
    Container,
    LineAtivo,

    ContainerTextos,
    Textos,
    OpenDropdown,
    ContainerDrop,

    ButtonItens,
    Row

} from './styles';

const DisciplinaItem = ({ item, UpdateItem }) => {

    const [isOpen, updateDrop] = useState(true)
    const [checket, setChecket] = useState(1)

    const padraoText = {
        fontSize: 10,
        color: "#FFF",
        fontWeight: "bold",
        lineHeight: 14,
    }

    const onToggle = () => {
        if (checket === 3) {
          setChecket(1);
          UpdateItem(item.id, "situacao", 1)
        } else {
          setChecket(checket + 1);
          UpdateItem(item.id, "situacao", checket + 1)
        }
    };

    const update = (it, name) => {
        if (it === 3) {
          UpdateItem(item.id, name, 1)
          item[name] = 1
        } else {
          UpdateItem(item.id, name, it + 1)
          item[name] = it + 1
        }
    };

    return (
        <>
            <Container>
                <LineAtivo n={checket} />

                <ContainerTextos>

                    <Textos numberOfLines={1} >{` ${item.disciplina ? item.disciplina : "Nome da disciplina"}`}</Textos>
                    <Textos numberOfLines={1} >Professor: {` ${item.nameprofessor ? item.nameprofessor : "Nome do Professor da disciplina"}`}</Textos>

                </ContainerTextos>

                <OpenDropdown isOpen={isOpen} onPress={() => updateDrop(prev => !prev)}>
                    {
                        !isOpen ? (
                            <FontAwesome5 name="caret-up" size={24} color="white" />
                        ) : (
                            <FontAwesome5 name="caret-down" size={24} color="white" />
                        )
                    }
                </OpenDropdown>

            </Container>

            {
                <Collapsible 
                    collapsed={isOpen}

                >
                    <ContainerDrop>

                        <Row>
                            <ButtonItens 
                                n={item.inspirese ? item.inspirese : 2}
                                onPress={() => { update(item.inspirese, "inspirese") }}    
                            >
                                <Text style={padraoText}>INSPIRE-SE</Text>
                            </ButtonItens>
                            <ButtonItens n={item.videoaulas ? item.videoaulas : 2}>
                                <Text style={padraoText}>VIDEOSAULAS</Text>
                            </ButtonItens>
                            <ButtonItens n={item.pea ? item.pea : 2}>
                                <Text style={padraoText}>PEA</Text>
                            </ButtonItens>
                            <ButtonItens n={item.livros ? item.livros : 2}>
                                <Text style={padraoText}>LIVRO</Text>
                            </ButtonItens>
                        </Row>

                        <Row>
                            <ButtonItens n={item.ma1 ? item.ma1 : 2}>
                                <Text style={padraoText}>ATIV 1</Text>
                            </ButtonItens>
                            <ButtonItens n={item.aps1 ? item.aps1 : 2}>
                                <Text style={padraoText}>ATIV 2</Text>
                            </ButtonItens>
                            <ButtonItens n={item.ma2 ? item.ma2 : 2}>
                                <Text style={padraoText}>ATIV 3</Text>
                            </ButtonItens>
                            <ButtonItens n={item.aps2 ? item.aps2 : 2}>
                                <Text style={padraoText}>ATIV 4</Text>
                            </ButtonItens>
                        </Row>

                        <Row>
                            <ButtonItens n={item.gabma1 ? item.gabma1 : 2}>
                                <Text style={padraoText}>GAB 1</Text>
                            </ButtonItens>
                            <ButtonItens n={item.gabaps1 ? item.gabaps1 : 2}>
                                <Text style={padraoText}>GAB 2</Text>
                            </ButtonItens>
                            <ButtonItens n={item.gabma2 ? item.gabma2 : 2}>
                                <Text style={padraoText}>GAB 3</Text>
                            </ButtonItens>
                            <ButtonItens n={item.gabaps2 ? item.gabaps2 : 2}>
                                <Text style={padraoText}>GAB 4</Text>
                            </ButtonItens>
                        </Row>

                        <Row>
                            <ButtonItens n={item.provafinal ? item.provafinal : 2}>
                                <Text style={padraoText}>PROVA N2</Text>
                            </ButtonItens>

                            <ButtonItens 
                                onPress={onToggle}
                                n={checket}
                            >
                                <Text style={padraoText}>ATIVO</Text>
                            </ButtonItens>
                        </Row>

                    </ContainerDrop>
                </Collapsible>
            }

        </>
    )
}

export default DisciplinaItem;


const itens = [
    { nome: "PEA", situacao: "1" }
]