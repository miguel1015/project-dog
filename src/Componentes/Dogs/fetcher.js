function fetcher(key) {
    return fetch(key).then(res => res.json())
}
export default fetcher