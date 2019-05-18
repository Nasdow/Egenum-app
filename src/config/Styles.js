import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: wp(100),
        height: hp(100),
    },
    imageBackground: {
        flex:1,
        width: wp(100),
        height: hp(100)
    },
    textHeader: {
        fontSize: hp(2.5),
    },
    textHeaderCredit: {
        fontSize: hp(2),
    },
    textCredit: {
        fontSize: hp(1.5),
        color: "deepskyblue"
    },
    textHomeHeader: {
        fontSize: hp(4),
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center",
    },
    iconHeaderDrawer: {
        paddingRight: wp(2)
    },
    iconHeaderBack: {
        paddingLeft: wp(2)
    },
    /** STYLE HOMESCREEN */
    loading: {
        flex: 1,
        width: wp(100),
        justifyContent: "center",
        alignItems: "center",
    },
    perspectiveView: {
        flex: 8,
        flexDirection: "row",
        width: wp(100),
        height: hp(100),
        backgroundColor: "#dddddd",
        justifyContent: "space-around",
        alignItems: "center",
    },
    perspectiveButton: {
        width: wp(30),
        height: hp(8),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
    },
    textPerspectiveButton: {
        fontSize: hp(2.25),
        textAlign: "center",
        fontStyle: "italic"
    },
    perspectiveCredit: {
        flex: 1,
        width: wp(100),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dddddd",
    },
    /** STYLE MAPSCREEN */
    mapContainer: {
        width: 100+"%",
        height: 90+"%",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    focusContainer: {
        flexDirection: "row",
        width: 100+"%",
        height: 10+"%",
        alignItems: "center",
        justifyContent: "center"
    },
    modalInfoView: {
        flex: 1,
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: "center",
        width: wp(65),
        marginVertical: hp(37),
    },
    modalInfoButton: {
        flex: 1,
        marginLeft: 45,
    },
    modalInfoClose: {
        flex: 1,
        flexDirection:"row", 
        width:100+"%", 
        alignItems:"flex-end",
        justifyContent: "flex-end"
    },
    modalInfoMessage: {
        flex: 9,
        alignItems: "center",
        justifyContent: "space-around",
    },
    modalInfoMessageText: {
        fontSize: hp(2),
        textAlign:"center"
    },
    focusOptions: {
        flex: 9,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: 100+"%",
        height: 100+"%",
    },
    options: {
        width: 30+"%",
        height: 55+"%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dddddd",
        borderRadius: 10,
    },
    selectedOption: {
        width: 30+"%",
        height: 55+"%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#70EDF9",
        borderRadius: 10,
    },
});