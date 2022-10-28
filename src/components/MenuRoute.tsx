import { BasicItem } from "./BasicItem";
import menu from "./MenuItems";

export default function MenuRoute() {
    return(
        <div>
            {menu.map((item) => <BasicItem id={item.id} name={item.name} description={item.description} calories={item.calories}  price={item.price} vegetarian={item.vegetarian} ></BasicItem>)}
        </div>
    )
}