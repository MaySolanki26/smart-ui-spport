import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDataGrid from './component/ReactDataGrid'
import { GridColumn } from 'smart-webcomponents-react'
import { appearance, behavior, editing, rowDetail } from './component/ReactDataGrid/DefaultProps'
import { createRoot } from 'react-dom/client'
import { tableData } from './component/ReactDataGrid/test'

function App() {

  const columnDef: GridColumn[] = [
    {
      label: "Party Code",
      dataField: "shortCode",
      width: 90,
      align: "center",
      cellsAlign: "center",
    },
    {
      label: "Name",
      dataField: "name",
      width: 160,
      align: "left",
      cellsAlign: "left",
    },

    {
      label: "Primary Contact",
      dataField: "contactPersonName",
      width: 120,
      align: "left",
      cellsAlign: "left",
      // render: (text: any, record: any) => (
      //   <Tooltip
      //     placement="topLeft"
      //     style={{ fontSize: "10px" }}
      //     title={`${record?.contactPersonName}`}
      //   >
      //     <span>{record?.contactPersonName}</span>
      //   </Tooltip>
      // ),
    },
    {
      label: "Email",
      dataField: "email1",
      width: 200,
      align: "left",
      cellsAlign: "left",
    },
    {
      label: "Employee",
      dataField: "employee",
      width: 100,
      align: "left",
      cellsAlign: "left",
      template: function (formatObject: any) {
        formatObject.template = `
						<div >
							<span style="margin-left: 5px;">${formatObject?.value?.name || ""}</span>
						</div>`;
      },
    },
    {
      label: "Category",
      dataField: "categories",
      width: 140,
      align: "center",
      cellsAlign: "center",
    },
    {
      label: "Mobile No",
      dataField: "mobileNo",
      width: 100,
      align: "center",
      cellsAlign: "center",
    },
    {
      label: "Country",
      dataField: "",
      width: 100,
      align: "center",
      cellsAlign: "center",
    },
    {
      label: "Created At",
      dataField: "registrationDate",
      width: 100,
      dataType: "date",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "dd/MM/yyyy",
    },
    {
      label: "Updated At",
      dataField: "registrationDate",
      width: 100,
      dataType: "date",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "dd/MM/yyyy",
    },
    {
      label: "Active",
      dataField: "isActive",
      width: 55,
      align: "center",
      template: "checkBox",
      editor: {
        template: "checkBox",
        onInit(index, dataField, editor) {
          editor.addEventListener("click", function (event) {
            console.log({ data: tableData[index][`${dataField}`] });
            editor.firstElementChild.value = event.target.innerHTML;
          });
        },
      },
    },
    {
      label: "Action",
      width: 100,
      align: "center",
      cellsAlign: "center",
      freeze: "far",
      // render: (text: any, record: any) => <CompanyLogoRenderer {...record} />, // Assuming CompanyLogoRenderer is a component
    },
  ];

  const onRowInit = (index: number, row: any) =>
  index === 0 ? (row.showDetail = true) : {};

const onRowDetailInit = (index: number, row: any, detail: any) => {
  const detailRoot = createRoot(detail);
  detailRoot.render(
    <ReactDataGrid
      dataSource={[]}
      columns={[
        "Population_Urban",
        "Population_Rural",
        "Population_Total",
        "GDP_Total",
      ]}
    />,
  );
};
  return (
    <div style={{height:"100%", width:"100%"}}>
      <ReactDataGrid
        id="grid"
        columns={columnDef}
        dataSource={tableData}
        rowDetail={rowDetail}
        behavior={behavior}
        editing={editing}
        onRowInit={onRowInit}
        onRowDetailInit={onRowDetailInit}
        appearance={appearance}
        // onCellClick={handleCheckBox}
      />
    </div>
  )
}

export default App
