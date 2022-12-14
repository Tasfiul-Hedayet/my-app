import styles from "../styles/customer.module.css";
import Image from "next/image";
import signup from "./signup";

function customer() {
  return (
    <>
    <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Customer Details</h1>
        </div>
        <br />

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
            <div className={styles.button}>
          <button>Submit</button>
        </div>
          </form>
        </div>
   </div>
    </>
  );
}

export default customer;
