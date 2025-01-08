export default function SearchForm() {
    return (
        <form>
            <input type="text" />
            <button
                onClick={(e) => {
                    e.preventDefault() //Untuk menghentikan sementara default action atau kirim form
                    alert("You Search")
                }}>
                Search
            </button>
        </form>
    )
}
