export const searchMedicine = async(name, limit) => {
    const url = 'http://195.133.145.14/api/drugs';
    const data = {
        "name": name,
        "limit": limit
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

export const getMedicineItem = async(id, pharmacy_id) => {
    const url = 'http://195.133.145.14/api/drugs/'+id.toString()+(pharmacy_id!=null ? `?pharmacy_id=${pharmacy_id}`:'');
    console.log(url);
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