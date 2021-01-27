export const makeOrder = async(token, pharmacy_id) => {
    const url = 'http://195.133.145.14/api/orders';
    const data = {
        "pharmacy_id" : pharmacy_id,
    }
    try {
        console.log('body:',data)
        let response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer '+token
            }
        });
        let status = response.status;
        // let json = await response.json();
        let json = await response.json();

        return [status, json];

    } catch (error) {
        alert(error)
    }
}