import { useEffect, useState } from "react";
import "./Dropdown.css";
import { DropdownProps, Structure } from "../../interface";

const Dropdown = ( props: DropdownProps ) => {

    //states
    const [options, setOptions] = useState(Array<Structure>);

    //comportements
    useEffect(() => {
        fetch('http://localhost:8080/structures')
            .then(response => response.json())
            .then(data => setOptions(data));
    }, []);


    // gestionnaire d'événements pour le changement de sélection
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value);
        props.onSelectedValueChange(value);
    };

    //render
    return (
        <div className={`div-select ${props.class}`} > 
        <label htmlFor="select">{props.label}</label>
        <select id="select" value={props.selectedValue} onChange={handleSelectChange}>
            {options.map((option, index) => (
                <option key={index} value={option.structureId}>Structure {option.structureId}</option>
            ))}
        </select>
      </div>
    );
}

export default Dropdown;