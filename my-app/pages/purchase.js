
import styles from "../styles/customer.module.css";
function purchase ()  {
  return (
    

    <div className={styles.bg}>
    <div className={styles.text}>
      <h1>Purchase invoice</h1>
    </div>
    <br />

  <div className={styles.form}>
    <form action="/send-data-here" method="post">
      <label for="invoice no">Invoice no </label>
      <input type="text" id="invoice no" name="invoice no" />
      <br />
      <br />
      <label for="reference">Reference </label>
      <input type="text" id="reference" name="reference" />
      <br />
      <br />
      <label for="purchasing price">Purchasing Price </label>
      <input type="text" id="purchasing price" name="purchasing price" />
      <br />
      <br />
      <label for="quantity">Quantity </label>
      <input type="text" id="quantity" name="quantity" />
      <br />
      <br />
      <label for="discount">Discount </label>
      <input type="text" id="discount" name="discount" />
      <br />
      <br />
      <label for="caring cost">Caring Cost </label>
      <input type="text" id="caring cost" name="caring cost" />
      <br />
      <br />
      <label for=" transportation cost"> Transportation Cost </label>
      <input
        type="text"
        id=" transportation cost"
        name=" transportation cost"
      />
      <br />
      <br />
      <label for=" authorized signature"> Authorized Signature </label>
      <input
        type="text"
        id=" authorized signature"
        name="  authorized signature"
      />
      <br />
      <br />
      <div className={styles.button}>
        <button>
        Submit
        </button>
      </div>
    </form>
  </div>
  </div>
  )
}

export default purchase