const port = process.env.PORT || 3001;


export async function Fetch(type) {
    const url = "https://battleground-page.onrender.com/api/" + type
    // const url="http://localhost:" + port + "/api/" + type
    try {
        const response = await fetch(url);
        const data = await response.json()
        if (!response.ok) {
            throw new Error("Error occured")
        }
        return data

    }
    catch (error) {
        console.error(error.message)

    }

}