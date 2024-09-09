import clientPromise from "../../lib/mongodb";

export async function getServerSideProps(){
    const client = await clientPromise;
    const db = client.db("gaming-hub");

    const forums = await db.collection("forums").find({}).toArray();

    return {
        props :{ forums : JSON.parse(JSON.stringify(forums)) },

    };
}

const Forums = ({ forums }) => {
    return (
      <div>
        <h1>Gaming Forums</h1>
        <ul>
          {forums.map(forum => (
            <li key={forum._id}>{forum.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Forums ;