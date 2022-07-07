import React, { ReactElement, useState } from "react";
import DataService from '../services/DataService';
import DataTable from 'react-data-table-component';
import { FilterComponent } from './FilterComponent';

// interface with typings for GovData respone 
interface IGovData {
    department: string,
    description: string,
    datasets: number
}

// configuring columns for DataTable, enabling sorting      
const columns = [
    {
        name: 'Department',
        selector: (row: { department: string; }) => row.department,
        sortable: true,
    },
    {
        name: 'Description',
        selector: (row: { description: string; }) => row.description,
        sortable: true,
    },
    {
        name: 'Description',
        selector: (row: { datasets: number; }) => row.datasets,
        sortable: true,
    },
];


export const DataTableComponent = (): ReactElement => {
    const [govData, setGovData] = useState<IGovData[]>([]);
    const [filterText, setFilterText] = React.useState('');

    DataService.getInstance().getGovData().then((result: IGovData[]) => {
        console.log('result from API ====>', result)
        setGovData(result);
    });

    // get all departments after filtering with textfield input data
    const filteredItems = govData.filter(
        item => item.department && item.department.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={(e: { target: { value: React.SetStateAction<string>; }; }) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText]);

    return (
        <DataTable
            title="GovData Table"
            columns={columns}
            data={filteredItems}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
        />
    );
};