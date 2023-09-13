import getPopular from "./fetcher/getPopular";
import MovieCard from "./components/MovieCard";

export default async function Userspage(){
    const users = await getPopular()
    
    return (
        <div>
              <h1>Users</h1>
            {/* {console.log(users)} */}
            <div className="" >
            {users.results.map((user) => (
                <MovieCard user={user} key={user.id} />
            ))}
            </div>



        </div>
    )
}