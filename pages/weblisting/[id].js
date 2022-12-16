export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false, // in case any 'id' does not exist it will show 404 page.
  };
};

export const getStaticProps = async (context) => {
  //   console.log(context);
  const id = context.params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      userDetails: data,
    },
  };
};

const Details = ({ userDetails }) => {
  return (
    <>
      <h1>Details Page</h1>
      <div>
        <h3>{userDetails.name}</h3>
        <p>
          <span>Email:</span> {userDetails.email}
        </p>
        <p>
          <span>Website:</span> {userDetails.website}
        </p>
        <p>
          <span>City:</span> {userDetails.address.city}
        </p>
        <p>
          <span>Username:</span> {userDetails.username}
        </p>
      </div>
    </>
  );
};

export default Details;
