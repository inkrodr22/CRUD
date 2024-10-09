import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { customers, filters, header } from './data';
import { actionBodyTemplate, countryBodyTemplate, representativeBodyTemplate, dateBodyTemplate, balanceBodyTemplate, statusBodyTemplate, activityBodyTemplate } from './templates';

const StartupTable = ({ customers, selectedCustomers, setSelectedCustomers }) => {
    return (
        <div className="table-container">
            <DataTable 
                value={customers} 
                paginator 
                header={header} 
                rows={10}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[10, 25, 50]} 
                dataKey="id" 
                selectionMode="checkbox" 
                selection={selectedCustomers} 
                onSelectionChange={(e) => setSelectedCustomers(e.value)}
                filters={filters} 
                filterDisplay="menu" 
                globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
                emptyMessage="No customers found." 
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter />
                <Column header="Agent" sortable filterField="representative" body={representativeBodyTemplate} />
                <Column field="date" header="Date" sortable dataType="date" body={dateBodyTemplate} />
                <Column field="balance" header="Balance" sortable dataType="numeric" body={balanceBodyTemplate} />
                <Column field="status" header="Status" sortable body={statusBodyTemplate} />
                <Column field="activity" header="Activity" sortable body={activityBodyTemplate} />
                <Column headerStyle={{ width: '5rem', textAlign: 'center' }} body={actionBodyTemplate} />
            </DataTable>
        </div>
    );
}

export default StartupTable;
