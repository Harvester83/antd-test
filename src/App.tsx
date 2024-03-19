import "devextreme/dist/css/dx.dark.css";

import DataGrid, {
  Column,
  DataGridTypes,
  Editing,
  Lookup,
} from "devextreme-react/data-grid";
import { employees, states, cities, Employee } from "./data.ts";

const onEditorPreparing = (e: DataGridTypes.EditorPreparingEvent) => {
  if (e.parentType === "dataRow" && e.dataField === "CityID") {
    const isStateNotSet = e.row.data.StateID === undefined;

    e.editorOptions.disabled = isStateNotSet;
  }
};

const getFilteredCities = (options: { data?: Employee }) => ({
  store: cities,
  filter: options.data ? ["StateID", "=", options.data.StateID] : null,
});

function setStateValue(rowData: Employee, value) {
  rowData.CityID = null;
  this.defaultSetCellValue(rowData, value);
}

const App = () => (
  <div id='data-grid-demo'>
    <DataGrid
      dataSource={employees}
      keyExpr='ID'
      showBorders={true}
      onEditorPreparing={onEditorPreparing}
    >
      <Editing mode='cell' allowUpdating={true} allowAdding={true}></Editing>

      <Column
        dataField='FirstName'
        cellRender={(data) => {
          console.log(data);
          return <span style={{ color: "red" }}>{data?.data?.FirstName}</span>;
        }}
      />

      <Column
        dataField='StateID'
        caption='State'
        cellTemplate={(data) => {
          console.log(data);
          return <Lookup dataSource={states} displayExpr='Name' valueExpr='ID' />
        }}
      />
        
      

      <Column dataField='CityID' caption='City'>
        <Lookup dataSource={cities} displayExpr='Name' valueExpr='ID' />
      </Column>

      {/* <Column
              dataField={"condition"}
              caption={t("condition")}
              width={130}
              cellRender={(data) => (
                <span
                  style={{ color: "red" }}
                  onClick={() => {
                    console.log(data, "sssda");
                  }}
                >
                  {data?.row?.data?.condition}
                </span>
              )}
              >
              <Lookup dataSource={conditions} valueExpr='id' displayExpr='label' />
          </Column> */}
    </DataGrid>
  </div>
);

export default App;
