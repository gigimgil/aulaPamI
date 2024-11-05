import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: '#EEEEEE', 
        padding: 8, 
    }, 
    titulo: {        
        fontSize: RFValue(22),
        fontWeight: 'bold', 
        color: '#37474F', 
        marginTop: 16
    },
    texto: {        
        fontSize: RFValue(18),
        fontWeight: 'bold', 
        color: '#4E342E', 
        marginTop: 16
    },
});

export default styles;