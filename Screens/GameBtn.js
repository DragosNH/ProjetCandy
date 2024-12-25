import { TouchableOpacity, View, Text } from "react-native";
import styles from "./style";

const GameBtn = (props) => {

    return(
        <View>
            <TouchableOpacity style={styles.gameBtn}><Text>{props.name}</Text></TouchableOpacity>
        </View>
    )
}

export default GameBtn;