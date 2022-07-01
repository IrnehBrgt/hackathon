import { React } from 'react';
import ProjectCard from './ProjectCard';
import data from "../assets/data.json";
import image from "../photos_et_logos/office.jpeg"


function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <ProjectCard
                title={item.company}
                descriptions={item.description}
                image={image}
                />
            ))}
        </ul>
    )
}

export default List