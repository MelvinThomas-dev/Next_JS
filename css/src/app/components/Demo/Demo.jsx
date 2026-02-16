import styles from "./Demo.module.css";

export default function Demo() {
  return (
    <div>
      <h1 className={styles.title}>Demo Component</h1>
    </div>
  );
}

//Global.css vs Module.css
//Module.css is a CSS file that is scoped to a specific component, while Global.css is a CSS file that is applied globally to the entire application.
//In this example, the styles defined in Global.css will affect all elements with the class "title", while the styles defined in Demo.module.css and User.module.css will only affect the respective components.