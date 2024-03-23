import "devextreme/dist/css/dx.dark.css";
import DataGrid, { Column, Editing, Lookup } from "devextreme-react/data-grid";
import { employees, states, cities } from "./data.ts";
import { useCallback } from "react";

const onCellPrepared = (e: any) => {
  if (e.rowType === "data") {
    if (e.column.dataField === "Speed" && e.data.Speed > 60) {
      e.cellElement.style.cssText = "color: white; background-color: red";
      // or
      // e.cellElement.classList.add("my-class");
    }
  }
};

const renderGridCell = (rowData: any) => {
  console.log(rowData);

  if (rowData.data.StateID === 1) {
    return <Lookup dataSource={states} displayExpr="Name" valueExpr="ID" />;
  }

  return <div>{rowData.value}</div>;
};


const App = () => {

  const onEditorPreparing = useCallback((event: any) => {
    if (event.dataField === "CityID") {
      event.editorOptions.disabled =
        event?.row?.data && event?.row?.data?.CityID === 1;
    }
  }, []);


  return (
    <div id="data-grid-demo">
      <DataGrid
        dataSource={employees}
        keyExpr="ID"
        showBorders={true}
        onCellPrepared={onCellPrepared}
        onEditorPreparing={onEditorPreparing}
      >
        <Editing mode="cell" allowUpdating={true} allowAdding={true}></Editing>

        <Column
          dataField="FirstName"
          alignment={"left"}
        />

        <Column dataField="Speed" alignment={"left"} />

        <Column
          dataField="StateID"
          alignment={"left"}
          caption="State"
          cellRender={renderGridCell}
        >
        </Column>

        <Column dataField="CityID" caption="City">
          <Lookup dataSource={cities} displayExpr="Name" valueExpr="ID" />
        </Column>
      </DataGrid>
    </div>
  );
};

export default App;
