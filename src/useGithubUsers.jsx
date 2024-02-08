import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())


export const useGithubUser = (username) => {
    const {data, error} = useSWR(username ? `https://api.github.com/users/${username}`: {}, fetcher);


    return {
        userData: data,
        error,
        isLoading: !data && !error,
        onRefresh: () => mutate 
    };
}