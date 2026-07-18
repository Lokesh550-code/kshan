export const request = async (client, url, config = {}) => {
    try {
        const {data} = await client.get(url, config);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}