import styles from "./about.module.css";
export const metadata = {
  title: "About",
  description: "This is about page",
};
const AboutPage = () => {
  return (
    <div>
      <h1 className={styles.text_color}>This is about page</h1>
    </div>
  );
};

export default AboutPage;
