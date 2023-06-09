import Dropdown from "../components/dropdown/Dropdown";
import Button from "../components/button/Button";
import Nav from "../components/nav/Nav";
import { useState } from "react";

const Structures = () => {

    // état pour stocker la valeur de selected
    const [selectedValue, setSelectedValue] = useState(1);

    function handleSelectedValueChange(value: number): void {
        setSelectedValue(value);
    }

    return (
        <>
        <Nav>
            <Button href="/" children="Home" className="btn-nav"></Button>
            <Button href="/structures" children="Structures" className="btn-nav"></Button>
        </Nav>
        <div className="display-column">
        <Dropdown selectedValue={selectedValue} onSelectedValueChange={handleSelectedValueChange} class="dropdown-structures" label="Structure's list : "></Dropdown>
        <Button href="/structure" children="Display structure's data" className="btn-read-structure"></Button>
        </div>
        </>

    );
    };

export default Structures;