import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class AgGridDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridOptions: {
        // PROPERTIES - object properties, myRowData and myColDefs are created somewhere in your application
        rowData: [
          { make: 'Toyota', model: 'Celica', price: 35000 },
          { make: 'Ford', model: 'Mondeo', price: 32000 },
          { make: 'Ford', model: 'Fiago', price: 37000 },
          { make: 'Porsche', model: 'Boxter', price: 72000 }
        ],
        defaultColDef: {
          sortable: true,
          editable: true,
          filter: true
        },
        columnDefs: [
          { headerName: 'Make', field: 'make' },
          { headerName: 'Model', field: 'model' },
          { headerName: 'Price', field: 'price' }
        ],

        // PROPERTIES - simple boolean / string / number properties
        pagination: true,
        rowSelection: 'multiple',

        // enableRangeSelection: true,

        // EVENTS - add event callback handlers
        onRowClicked: function(event) {
          console.log('a row was clicked');
        },
        onColumnResized: function(event) {
          console.log('a column was resized');
        },
        onGridReady: function(event) {
          console.log('the grid is now ready');
        }

        // CALLBACKS
        // isScrollLag: function() { return false; }
      }
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  };

  onSelectionChanged = params => {
    console.log(params.api.getSelectedRows());
  };

  render() {
    return (
      <div className="ag-grid-demo">
        <h1>AgGrid Demo</h1>
        <div style={{ width: '100%', height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ overflow: 'hidden', flexGrow: '1' }}>
              <div
                id="demo-grid"
                style={{ height: '100%', width: '100%' }}
                className="ag-theme-balham"
              >
                <AgGridReact
                  gridOptions={this.state.gridOptions}
                  onGridReady={this.onGridReady}
                  onSelectionChanged={this.onSelectionChanged}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgGridDemo;
