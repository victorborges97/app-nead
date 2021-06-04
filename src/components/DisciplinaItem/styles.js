import styled from "styled-components/native"

function setColor(n) {
    switch (n) {
        case 1:
            return "#26A443"
        case 2:
            return "#787878"
        case 3:
            return "#C14033"
        default:
            return "#787878"
    }
}

export const Container = styled.View`
    /* background-color: #083219; */
    width: 100%;
    min-height: 53px;
    background: #E7E7E7;
    flex-direction: row;
    align-items: center;
`

export const LineAtivo = styled.View`
    height: 100%;
    width: 4px;
    background-color: ${props => setColor(props.n)};
`

export const ContainerTextos = styled.View`
    flex: 1;
    margin-left: 15px;
    
`

export const Textos = styled.Text`

`

export const OpenDropdown = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    background: ${props => props.isOpen ? "#959595" : "#FF5555"};
    margin-left: 10px;
    margin-right: 15px;
`

export const ContainerDrop = styled.View`
    background: #D9D9D9;
    min-height: 142px;
    width: 100%;
`

export const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

export const ButtonItens = styled.TouchableOpacity`
    background: ${props => setColor(props.n)};
    flex: 1;
    margin: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 8px;
    padding-left: 8px;

    border-radius: 5px;

    align-items: center;
`

