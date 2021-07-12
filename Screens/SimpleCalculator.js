import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button, Image } from "react-native";

export default function SimpleCalculator() {
    const [resultText, setResultText] = useState("");
    const [calcText, setCalcText] = useState("");
    const onButtonClick = (text) => {
        if (text == "=") {
            return calculateResult();
        }
        setResultText(resultText + text);
    };

    const calculateResult = () => {
        setCalcText(eval(resultText));
    };

    const onOperationClick = (operation) => {
        let operations = ["DEL", "+", "-", "*", "/"];

        if (operation == "DEL") {
            return setResultText(
                resultText.toString().substring(0, resultText.length - 1)
            );
        }
        if (operation == "AC") {
            setResultText("");
            setCalcText(0);
            return;
        }
        if (operations.includes(resultText.toString().split("").pop())) return;
        setResultText(resultText + operation);
    };

    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>{calcText}</Text>
            </View>
            <View style={styles.calculation}>
                <Text style={styles.calculationText}>{resultText}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => onButtonClick(1)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}> <Image style={{ width: 50, height: 40 }}
                                source={require('../icons/1.png')}
                            /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(2)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/2.png')}
                            /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(3)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/3.png')}
                            /></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => onButtonClick(4)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/4.png')}
                            /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(5)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/5.png')}
                            /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(6)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/6.png')}
                            /></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => onButtonClick(7)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/7.png')}
                            /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(8)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/8.png')}
                            /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(9)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/9.png')}
                            /></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => onButtonClick(".")}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(0)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}><Image style={{ width: 50, height: 40 }}
                                source={require('../icons/0.png')}
                            /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick("=")}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.operations}>
                    <TouchableOpacity
                        onPress={() => onOperationClick("DEL")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>DEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onOperationClick("AC")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onOperationClick("+")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onOperationClick("-")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onOperationClick("/")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onOperationClick("*")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>*</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    result: {
        flex: 2,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    resultText: {
        fontSize: 40,
        color: "white",
    },
    calculationText: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
    },
    number: {
        fontSize: 35,
        color: "white",
    },
    calculation: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        fontSize: 40,
    },
    buttons: {
        flex: 7,
        flexDirection: "row",
    },
    numbers: {
        flex: 3,
        backgroundColor: "#434355",
    },
    row: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    operations: {
        flex: 1,
        backgroundColor: "#636361",
        alignItems: "center",
        justifyContent: "space-around",
    },
    operationButton: {
        fontSize: 35,
        color: "white",
    },
});



