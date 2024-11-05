import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Atividade1() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Introdução React Native</Text>
            <Text style={styles.texto}>Aula 1 de react native com o expo</Text>
        </View>
    );
};