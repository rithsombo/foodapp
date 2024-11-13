import styles from "./fooditem.module.css";
export default function Fooditem({ food, setfoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="" className={styles.itemimage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setfoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
