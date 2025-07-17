import { useState } from 'react'
import './calculator.css'

function Calculator() {
    let [outputDisplay, setOutputDisplay] = useState("");
    let [currentOutputLine, setCurrentOutputLine] = useState("");

    function addDigit(digit) {
        setCurrentOutputLine(prev => prev + digit);
    }

    function solve() {
        setOutputDisplay(prev => prev + "\n" + currentOutputLine + "=\n" + eval(currentOutputLine) + "\n" + "----------------------------");
        setCurrentOutputLine("");
    }

    return(<>
        <div id="entireCalcArea">
            {/* The output screen */}
            <textArea className="calcOutputDisplay" id="calcOutputDisplay" readOnly>
                {outputDisplay + "\n" + currentOutputLine}
            </textArea>

            {/* The buttons */}
            <div id="calcButtonsArea">
                <div className="row" id="row1">
                    <button className="calcButtons" onClick={() => addDigit("(")}>{"("}</button>
                    <button className="calcButtons" onClick={() => addDigit(")")}>{")"}</button>
                    <button className="calcButtons" onClick={() => setCurrentOutputLine("")}>{"C"}</button>
                    <button className="calcButtons" onClick={() => setCurrentOutputLine(prev => prev.slice(0, -1))}>{"Del"}</button>
                </div>
                <div className="row" id="row2">
                    <button className="calcButtons" onClick={() => addDigit("1")}>{"1"}</button>
                    <button className="calcButtons" onClick={() => addDigit("2")}>{"2"}</button>
                    <button className="calcButtons" onClick={() => addDigit("3")}>{"3"}</button>
                    <button className="calcButtons" onClick={() => addDigit("+")}>{"+"}</button>
                </div>
                <div className="row" id="row3">
                    <button className="calcButtons" onClick={() => addDigit("4")}>{"4"}</button>
                    <button className="calcButtons" onClick={() => addDigit("5")}>{"5"}</button>
                    <button className="calcButtons" onClick={() => addDigit("6")}>{"6"}</button>
                    <button className="calcButtons" onClick={() => addDigit("-")}>{"-"}</button>
                </div>
                <div className="row" id="row4">
                    <button className="calcButtons" onClick={() => addDigit("7")}>{"7"}</button>
                    <button className="calcButtons" onClick={() => addDigit("8")}>{"8"}</button>
                    <button className="calcButtons" onClick={() => addDigit("9")}>{"9"}</button>
                    <button className="calcButtons" onClick={() => addDigit("*")}>{"*"}</button>
                </div>
                <div className="row" id="row5">
                    <button className="calcButtons" onClick={() => addDigit(".")}>{"."}</button>
                    <button className="calcButtons" onClick={() => addDigit("0")}>{"0"}</button>
                    <button className="calcButtons" onClick={() => solve()}>{"="}</button>
                    <button className="calcButtons" onClick={() => addDigit("/")}>{"/"}</button>
                </div>
            </div>
        </div>
    </>)
}

export default Calculator