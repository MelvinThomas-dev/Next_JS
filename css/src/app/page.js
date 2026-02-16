
import User from "./components/User/User";
import styles from "./page.module.css";
import Demo from "./components/Demo/Demo";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="title">Hello World</h1>
      <User />
      <Demo />
    </div>
  );
}


//Global.css vs Module.css
//Global.css is applied globally to the entire application, while Module.css is scoped to a specific component. 
//In this example, the styles defined in Global.css will affect all elements with the class "title", while the styles defined in Demo.module.css and User.module.css will only affect the respective components.

