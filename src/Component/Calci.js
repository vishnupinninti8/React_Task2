import React, { useState } from 'react'
import './Calci.css'

const Calci = () => {

    const [text, setText] = useState('');

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <table className="table">
                        <tr>
                            <td colSpan="4"><input value={text} type="text" id="textarea" readOnly /></td>
                        </tr>
                        <tr>
                            <td><input className='none' /></td>
                            <td><input className='none' /></td>
                            <td><input className='none' /></td>
                            <td><input type="button" value="CLEAR" onClick={() => setText('')} /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="1" onClick={() => setText(text + '1')} /></td>
                            <td><input type="button" value="2" onClick={() => setText(text + '2')} /></td>
                            <td><input type="button" value="3" onClick={() => setText(text + '3')} /></td>
                            <td><input type="button" value="/" onClick={() => setText(text + '/')} /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="4" onClick={() => setText(text + '4')} /></td>
                            <td><input type="button" value="5" onClick={() => setText(text + '5')} /></td>
                            <td><input type="button" value="6" onClick={() => setText(text + '6')} /></td>
                            <td><input type="button" value="+" onClick={() => setText(text + '+')} /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="7" onClick={() => setText(text + '7')} /></td>
                            <td><input type="button" value="8" onClick={() => setText(text + '8')} /></td>
                            <td><input type="button" value="9" onClick={() => setText(text + '9')} /></td>
                            <td><input type="button" value="-" onClick={() => setText(text + '-')} /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="." onClick={() => setText(text + '.')} /></td>
                            <td><input type="button" value="0" onClick={() => setText(text + '0')} /></td>
                            <td><input type="button" value="=" onClick={() => setText(eval(text))} /></td>
                            <td><input type="button" value="*" onClick={() => setText(text + '*')} /></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Calci;