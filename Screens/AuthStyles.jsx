import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",


    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",



    },
    formWrapper: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

    },
    input: {
        borderWidth: 1,
        color: "#212121",
        borderColor: "#E8E8E8",
        borderRadius: 8,
        height: 50,
        backgroundColor: "#F6F6F6",
        placeholderTextColor: "#BDBDBD",
        padding: 16,
        fontWeight: "400",
        fontSize: 16,
        marginHorizontal: 16,
        position: "relative",

    },
    inputShowPasword: {
        position: "absolute",
        fontSize: 16,
        right: 26,
        top: 16,
        color: "#1B4371",
    },
    title: {
        textAlign: 'center',
        fontWeight: "500",
        fontSize: 30,
        marginBottom: 33,
        marginTop: 32,
    },
    form: {
        marginHorizontal: 16,
        backgroundColor: '#fff',
        
    },
    btn: {
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 16,
        paddingBottom: 16,
        marginHorizontal: 16,
        marginTop: 43,
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    singInText: {
        color: "#1B4371",
        marginTop: 16,
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 16,
        alignItems: "center",
    }
});

export default styles;