

      import styles from "../styles/signup.module.css";

function signup  () {
    return (
      <>
      <div className={styles.bg}>

      <div className={styles.text}>
        <h>signup</h>
      </div>
      <br/>


      <div className={styles.form}>

      <form action="/send-data-here" method="post">
      <label for="first">Email Address</label>
      <input type="text" id="first" name="first" />
      <br/>
      <br/>
      <label for="last">Password</label>
      <input type="text" id="last" name="last" />
      <br/>
      <br/>
      </form>
      </div>


      <div className={styles.button}>
      <button>Submit</button>
      </div>
      </div>
      <div>signup</div>



    
      
      
      </>
      
    )

    
  }
  
  export default signup