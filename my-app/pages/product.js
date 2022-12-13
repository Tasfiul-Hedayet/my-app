import styles from "../styles/signup.module.css";

function product() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Customer Details</h1>
        </div>
        <br />

        <div className={styles.form}>
          <form action="/send-data-here" method="post">
            <label for="product">Product Category </label>
            <select id="Product" name="product">
              <option value="Pen">Pen </option>
              <option value="Glass">Glass </option>
              <option value="Glass">Paper </option>
              <option value="Glass">Bottle </option>
            </select>
            <br />
            <br />

            <label for="product">Sub Category </label>
            <select id="Product" name="product">
              <option value="Pen">Pen </option>
              <option value="Glass">Glass </option>
              <option value="Glass">Paper </option>
              <option value="Glass">Bottle </option>
            </select>
            <br />
            <br />

            <label for="first">Brand </label>
            <input type="text" id="first" name="first" />
            <br />
            <br />

            <label for="first">Product Name </label>
            <input type="text" id="first" name="first" />
            <br />
            <br />

            <label for="first">Unit Measure </label>
            <input type="text" id="first" name="first" />
            <br />
            <br />

            <div className={styles.button}>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default product;
