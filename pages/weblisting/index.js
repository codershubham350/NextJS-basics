import Link from "next/link";
import styles from "../../styles/users.module.css";

// Executes at build time not in browser
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      userList: data,
    },
  };
};

const Listing = ({ userList }) => {
  return (
    <div>
      <h1>All Users</h1>
      {userList?.map((user) => (
        <div key={user.id}>
          <Link href={`/weblisting/${user.id}`} className={styles.single}>
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Listing;
