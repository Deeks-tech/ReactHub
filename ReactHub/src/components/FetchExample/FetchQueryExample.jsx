import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function FetchQuery() {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["nufcData"],
    enabled: false,
    queryFn: () => {
      return axios.get("http://localhost:3001/club");
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error loading data</h2>;
  }

  function handleClick() {
    refetch();
  }

  return (
    <section>
      <h1>FetchQuery component</h1>
      <h3>This app will show how to use and render via React Query</h3>
      <ul>
        <li>We will use react query to handle the management of our Fetch</li>
        <li>To make the fetch we will use Axios</li>
        <li>
          we will also make a mock backend server via
          <a href="https://www.npmjs.com/package/json-server"> JSON server</a>
        </li>
      </ul>
      <div className="fetch-component">
        <button onClick={handleClick}>Fetch the Newcastle united data</button>
        {data && (
          <div>
            <h4>Fetched Data will be show below</h4>
            <p>
              <strong>
                {data?.data.name} is managed by {data?.data.manager}
              </strong>
            </p>
            <ul>
              <li>
                The newcastle information above has been served by JSON server
                which needs to be running at the same time as npm start
              </li>

              <li>
                The data has been access by "data.data.name" or
                "data.data.manager"
              </li>

              <li>
                This is because the JSON server serves its payload as data ,
                axios also returns data
              </li>
              <li>
                UseQuery has been destructured and data , isLoading , error and
                refetch assinged
              </li>
              <li>
                Enabled is a parameter passed to useQuery and is set to false
                this ensures the fetch is not actioned on mount
              </li>
              <li>
                The button when clicked calls handleClick which fires refetch to
                then fetch the info
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
