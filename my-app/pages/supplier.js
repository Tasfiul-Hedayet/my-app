import styles from "../styles/signup.module.css";

function supplier() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Supplier Details</h1>
        </div>
        <br/>

        <div className={styles.form}>
          <form action="/send-data-here" method="post">
            <label for="first">Name </label>
            <input type="text" id="first" name="first" />
            <br />
            <br />
            <label for="last">Address </label>
            <input type="text" id="last" name="last" />
            <br />
            <br />
            <label for="last">Phone Number </label>
            <input type="text" id="last" name="last" />
            <br />
            <br />
            <label for="last">Description </label>
            <input type="text" id="last" name="last" />
            <br />
            <br />
            <label for="product">Product </label>
            <select id="Product" name="product">
              <option value="Pen">Pen </option>
              <option value="Glass">Glass </option>
              <option value="Glass">Paper </option>
              <option value="Glass">Bottle </option>
            </select>
            <br />
            <br />
          </form>
        </div>

        <div className={styles.button}>
          <button> Submit </button>
        </div>
      </div>
    </>
  );
}

export default supplier;
