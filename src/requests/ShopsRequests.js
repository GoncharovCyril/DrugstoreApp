export const getPharmacies = async () => {
    const url = `http://195.133.145.14/api/pharmacies`;
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