import React, {useEffect, useState} from "react";


const Calculator = () => {

    const [isOperatorClick, setIsOperatorClick] = useState(false)
    const [operator, setOperator] = useState()
    const [firstNumber, setFirstNumber] = useState("")
    const [secondNumber, setSecondNumber] = useState("")
    const [result, setResult] = useState("")

    function handleNumber(num) {
        if (result) {
            setSecondNumber('')
            setIsOperatorClick(false)
            setResult("")
        }
        if (result && !operator && !isOperatorClick) {
            setFirstNumber('')
            setFirstNumber((prev) => prev + num)
        } else if (!isOperatorClick && !operator && !result) {
            setFirstNumber((prev) => prev + num)
        } else {
            setSecondNumber((prev) => prev + num)
        }
    }

    function handleOperator(operator) {
        if (result) {
            setFirstNumber(`${result}`)
        }
        setIsOperatorClick(true)
        setOperator(operator)
        setSecondNumber('')
    }

    function handleResult() {
        let res
        if (secondNumber === '') {
            return
        }
        if (operator === '+') {
            res = parseFloat(firstNumber) + parseFloat(secondNumber)
        } else if (operator === '*') {
            res = parseFloat(firstNumber) * parseFloat(secondNumber)
        } else if (operator === '-') {
            res = parseFloat(firstNumber) - parseFloat(secondNumber)
        } else if (operator === '/') {
            res = parseFloat(firstNumber) / parseFloat(secondNumber)
        }
        let num = res % 1 !== 0 ? parseFloat(res).toFixed(9) : res
        setResult(num)
        setOperator('')
        setIsOperatorClick(false)

    }

    function handleAllClear() {
        setFirstNumber('')
        setSecondNumber('')
        setOperator('')
        setIsOperatorClick(false)
        setResult('')
    }
    function handleClearEnd(){
        console.log('here')
    }
    return (
        <>
            <div className="container">
                <div className="calc">
                    <div className="header">
                        <div className="titles">
                            My Calculator
                        </div>
                    </div>
                    <div className="display">
                        <div className="display-main">
                            {result}
                        </div>

                        <div className="display-operations">
                            {result ? result : <>{firstNumber} {operator} {secondNumber}</>}
                        </div>
                    </div>

                    <div className="row">
                        <button className="button div" type={'button'} onClick={() => handleOperator('/')}>/</button>
                        <button className="button mult" type={'button'} onClick={() => handleOperator('*')}>x</button>
                        <button className="button ac zero" onClick={handleAllClear}>ac</button>
                        {/*<button className="button ce" onClick={handleClearEnd}>ce</button>*/}
                    </div>
                    <div className="row">
                        <button className="button seven" onClick={() => handleNumber('7')} type={'button'}>7</button>
                        <button className="button eight" onClick={() => handleNumber('8')} type={'button'}>8</button>
                        <button className="button nine" onClick={() => handleNumber('9')} type={'button'}>9</button>
                        <button className="button minus" type={'button'} onClick={() => handleOperator('-')}>−</button>
                    </div>
                    <div className="row">
                        <button className="button four" onClick={() => handleNumber('4')} type={'button'}>4</button>
                        <button className="button five" onClick={() => handleNumber('5')} type={'button'}>5</button>
                        <button className="button six" onClick={() => handleNumber('6')} type={'button'}>6</button>
                        <button className="button plus" type={'button'} onClick={() => handleOperator('+')}>+</button>
                    </div>
                    <div className="bottom-row">
                        <div className="left">
                            <div className="row">
                                <button className="button one" onClick={() => handleNumber('1')} type={'button'}>1
                                </button>
                                <button className="button two" onClick={() => handleNumber('2')} type={'button'}>2
                                </button>
                                <button className="button three" onClick={() => handleNumber('3')} type={'button'}>3
                                </button>
                            </div>

                            <div className="row">
                                <button className="button zero" onClick={() => handleNumber('0')} type={'button'}>0
                                </button>
                                <button className="button dot" onClick={() => handleNumber('.')} type={'button'}>.
                                </button>
                            </div>
                        </div>

                        <div className="right">
                            <div className="button eq" onClick={handleResult}>=</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Calculator