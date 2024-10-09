export const countryBodyTemplate = (rowData) => rowData.country.name;
export const representativeBodyTemplate = (rowData) => rowData.representative.name;
export const dateBodyTemplate = (rowData) => rowData.date;
export const balanceBodyTemplate = (rowData) => rowData.balance;
export const statusBodyTemplate = (rowData) => rowData.status;
export const activityBodyTemplate = (rowData) => rowData.activity;


export const actionBodyTemplate = (rowData) => {
    return (
        <div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};