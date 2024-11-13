import Fooditem from "./Fooditem";

export default function Foodlist({foodData,setfoodId}){
    return <div>
        {foodData.map((food) => (
        <Fooditem setfoodId={setfoodId} key={food.id} food={food}/>
      ))}
    </div>
}