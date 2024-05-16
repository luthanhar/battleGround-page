const port = process.env.PORT || 3001;

export async function Fetch(type) {
    try {
        const response = await fetch("http://localhost:" + port + "/api/" + type);
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