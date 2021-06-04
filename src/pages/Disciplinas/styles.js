import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: #FFFFFF;
    flex: 1;
`

export const ContainerHeader = styled.View`
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    padding: 0px 15px;

    align-items: center;
`

export const TextDisciplina = styled.Text`
    font-size: 18px;
    line-height: 19px;
    color: #686868;
`

export const TextCont = styled.Text`
    margin-left: 10px;
    background: #34393D;
    border-radius: 25px;
    padding: 4px 8px;

    font-weight: bold;
    font-size: 12px;

    color: #FFFFFF;
`

export const ContainerFiltros = styled.View`
    width: 100%;
    margin-top: 10px;
    padding: 0px 10px;
`

export const FiltroNome = styled.View`
    width: 100%;
    flex-direction: row;
    height: 45px;
    align-items: center;
`

export const InputFiltro = styled.TextInput`
    flex: 1;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #FFFFFF;
    border: 2px solid #E8E9EB;
    padding: 5px 10px;
`

export const ButtonSearch = styled.TouchableOpacity`
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #26A443;
    height: 100%;
    padding: 10px;
`

export const Filtros = styled.View`
    width: 100%;
    flex-direction: row;
    height: 45px;
    align-items: center;
    margin-top: 10px;
`

export const SelectProfessores = styled.View`
    flex: 1;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #FFFFFF;
    border: 2px solid #E8E9EB;
    padding: 5px 10px;
`

export const SelectCursos = styled.View`
    flex: 1;
    height: 100%;
    background: #FFFFFF;
    border: 2px solid #E8E9EB;
    padding: 5px 10px;
`

export const SelectAtivos = styled.View`
    flex: 1;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #FFFFFF;
    border: 2px solid #E8E9EB;
    padding: 5px 10px;
`

export const GroupButtons = styled.View`
    width: 100%;
    flex-direction: row;
    height: 45px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const NewDisciplina = styled.TouchableOpacity`
    background: #007CFD;
    min-width: 119px;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const TextNew = styled.Text`
    font-weight: bold;
    font-size: 12px;

    color: #FFFFFF;

    margin-left: 5px;
`

export const Imprimir = styled.TouchableOpacity`
    background: #FFBB0E;
    min-width: 119px;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const TextImprimir = styled.Text`
    font-weight: bold;
    font-size: 12px;

    color: #000000;

    margin-left: 5px;
`
