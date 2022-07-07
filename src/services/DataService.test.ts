import DataService from './DataService';

describe('Tests for DataService', () => {
    const dataService = DataService.getInstance();
    it('Returns DataService instance', () => {
        expect(dataService).toBeDefined();
    })

    it('Tests DataService function getGovData', async () => {
        const response = { json: jest.fn().mockResolvedValueOnce({response: 200}) };
        global.fetch = jest.fn().mockResolvedValueOnce(response);

        return dataService.getGovData().then((result: any[]) => {
            expect(result).toMatchObject({response: 200});
        });
    })
});