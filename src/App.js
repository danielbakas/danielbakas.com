import './App.css';
import {useState} from "react";
import {Form} from "react-bootstrap";

function App() {
    const [value, setValue] = useState('Si yo digo ping tu dices...')
    const handleChange = e => {
        setValue(e.target.value)
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>AO1657103 | Daniel Bakas Amuchástegui</p>
                <h1 className="pb-5">Si yo digo ping tu dices...</h1>
                <img src="logo.svg" className="App-logo" alt="logo"/>
                <Form className="pt-5">
                    <Form.Group className="mb-3">
                        <Form.Control required placeholder="E.g. Pong"
                                      onChange={handleChange}/>
                    </Form.Group>
                </Form>
                {value && <p className="pt-2">
                    Pong!! 🥳... O bueno también puede ser {value} 😋
                </p>}
            </header>
        </div>
    );
}

export default App;