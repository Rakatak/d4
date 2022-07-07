// Data service for API Calls
export class DataService {

    static myInstance = null;
    static getInstance() {  
        return new DataService();
    }

    // Simulating a REST API Call, returning the local json object from public
    public async getGovData(): Promise<any> {
        try {
            let response = await fetch('backend-response.json');
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
      }
}

export default DataService
