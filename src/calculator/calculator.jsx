import './calculator.css'
import Output from './output.jsx'

function CalculatorButtons() {
    return(
        <>
            <div id="entireCalcArea">
                <Output />
                <div id="calcButtonsArea">
                    <div className="row" id="row1">
                        <button className="calcButtons" onclick="addDigit(`(`)">{"("}</button>
                        <button className="calcButtons" onclick="addDigit(`)`)">{")"}</button>
                        <button className="calcButtons" onclick="addDigit(`clear`)">{"C"}</button>
                        <button className="calcButtons" onclick="addDigit(`del`)">{"Del"}</button>
                    </div>
                    <div className="row" id="row2">
                        <button className="calcButtons" onclick="addDigit(`1`)">{"1"}</button>
                        <button className="calcButtons" onclick="addDigit(`2`)">{"2"}</button>
                        <button className="calcButtons" onclick="addDigit(`3`)">{"3"}</button>
                        <button className="calcButtons" onclick="addDigit(`+`)">{"+"}</button>
                    </div>
                    <div className="row" id="row3">
                        <button className="calcButtons" onclick="addDigit(`4`)">{"4"}</button>
                        <button className="calcButtons" onclick="addDigit(`5`)">{"5"}</button>
                        <button className="calcButtons" onclick="addDigit(`6`)">{"6"}</button>
                        <button className="calcButtons" onclick="addDigit(`-`)">{"-"}</button>
                    </div>
                    <div className="row" id="row4">
                        <button className="calcButtons" onclick="addDigit(`7`)">{"7"}</button>
                        <button className="calcButtons" onclick="addDigit(`8`)">{"8"}</button>
                        <button className="calcButtons" onclick="addDigit(`9`)">{"9"}</button>
                        <button className="calcButtons" onclick="addDigit(`*`)">{"*"}</button>
                    </div>
                    <div className="row" id="row5">
                        <button className="calcButtons" onclick="addDigit(`.`)">{"."}</button>
                        <button className="calcButtons" onclick="addDigit(`0`)">{"0"}</button>
                        <button className="calcButtons" onclick="addDigit(`=`)">{"="}</button>
                        <button className="calcButtons" onclick="addDigit(`/`)">{"/"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculatorButtons