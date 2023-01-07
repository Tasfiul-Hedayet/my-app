import styles from "../styles/customer.module.css";

function payment() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Customer Invoice</h1>
        </div>
        <br />
        <div className={styles.form}>
          <form action="/send-data-here" method="post">
            <label for="suppliers name">Suppliers Name </label>
            <input type="text" id="suppliers name" name="suppliers name" />
            <br />
            <br />
            <label for="amount">Amount </label>
            <select id="country" name="country">
              <option value="cash">Cash</option>
              <option value="Check">Check</option>
            </select>
            <br />
            <br />

            <label for=" authorized signature"> Authorized Signature </label>
            <input type="text" id=" authorized signature" name="  authorized signature"/>
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

export default payment;
