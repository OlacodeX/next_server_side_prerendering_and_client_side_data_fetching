import useSWR from "swr"

// define function to pass to the swr hook, this can be defined inline directly inside the swr but it is common practice o define is separately and then pass it to the swr hook.
const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}
function DashboardSWR() {
    // this hook returns amongst other things, data and error.
    const { data, error, isLoading } = useSWR("dashboard", fetcher)

    // if there is an error
    if (error) 
        return 'Oops, an error has occured'
    // if no data yet
    if (isLoading)
        return <h2>Loading...</h2>

    // else return dashboard
    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>
    )
}

export default DashboardSWR