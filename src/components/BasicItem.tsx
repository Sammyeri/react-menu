import { Link } from "react-router-dom";
import Item from "../models/Item";

export function BasicItem(item:Item){

    return(
        <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <Link to = {`/details/${item.id}`}>Details</Link>
        </div>
    )
}