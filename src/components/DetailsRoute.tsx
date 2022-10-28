import { useParams } from "react-router-dom";
import Item from "../models/Item";
import menu from "./MenuItems";



export default function DetailsRoute(){
    let {id} = useParams();
    let foundItem: Item | undefined = menu.find((item) => item.id === id);
    
    return(
        <div>
            <p>Name: {foundItem?.name}</p>
            <p>Calories: {foundItem?.calories}</p>
            <p>Description: {foundItem?.description}</p>
            <p>Vegetarian: {foundItem?.vegetarian ? "yes" : "no"}</p>
            <p>Price: ${foundItem?.price}</p>
        </div>
    )
}