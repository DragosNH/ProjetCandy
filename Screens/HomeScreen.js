import GameBtn from "./GameBtn";

const HomeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <GameBtn name={'Start Game'} />
        </View>
    )
}

export default HomeScreen;