import styles from "../styles/product.module.css";
import Link from "next/link"

import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Badge from 'components/Badge/Badge.js';

function product ()  {
    return (
    <>
    <div>
      <CustomDropdown
        buttonText="Regular"
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          {divider: true},
          "Separated link",
          {divider: true},
          "One more separated link",
        ]}
      />
    </div>

    </>
    )
  }
  
  export default product