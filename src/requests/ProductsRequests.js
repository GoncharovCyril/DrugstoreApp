export const searchMedicine = async(name) => {
    const url = 'http://195.133.145.14/api/drugs';
    const data = {
        "name": name,
        "limit": 15
    }
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let status = response.status;
        // let json = await response.json();
        let text = await response.text();

        return [status, text];

    } catch (error) {
        alert(error)
    }
}

export const getMedicineItem = async(id) => {
    const url = 'http://195.133.145.14/api/drugs/'+id.toString();
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        let status = response.status;
        let json = await response.json();
        return [status, json];
    } catch (error) {
        alert(error)
    }
}