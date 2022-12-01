import './App.css';
import {Form} from "react-bootstrap";
import {useState} from "react";

function App() {
    const [value, setValue] = useState('Si yo digo ping tu dices... ')
    return (
        <div className="App bg-dark">
            <header className="App-header">
                <p className="text-muted">AO1657103 | Daniel Bakas
                    Amuchástegui</p>
                <Form className="p-5">
                    <span data-cy="title">
                        <Form.Control
                            className="border-0 bg-dark text-light text-center mb-3"
                            required
                            onChange={e => setValue(e.target.value)}
                            style={{fontSize: "50px", width: "80vw"}}
                            defaultValue={value}/>
                    </span>
                </Form>
                <img src="logo.svg" className="App-logo" alt="logo"/>
                <p className="text-muted" style={{fontSize: "12px"}}>Da click en
                    el título para
                    modificarlo</p>
            </header>
        </div>
    );
}

export default App;