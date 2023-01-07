import styles from "../styles/supplier.module.css";
import Link from "next/link";

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
            <label for="sname">Name </label>
            <input type="text" id="sname" name="sname" />
            <br />
            <br />
            <label for="address">Address </label>
            <input type="text" id="address" name="address" />
            <br />
            <br />
            <label for="phone no">Phone Number </label>
            <input type="text" id="phone no" name="phone no" />
            <br />
            <br />
            <label for="description">Description </label>
            <input type="text" id="description" name="description" />
            <br />
            <br />
            <label for="product">Product </label>
            <input type="text" id="product" name="product" />
            <br />
            <br />
            <div className={styles.button}>
          <button> <Link href={"/stext"}>Submit</Link> </button>
        </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default supplier;
