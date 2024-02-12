/** @format */

import { forwardRef } from "react";

import "smart-webcomponents-react/source/styles/smart.default.css";
import {
  Smart,
  Grid,
  GridBehavior,
  GridAppearance,
  GridPaging,
  GridPager,
  GridSorting,
  GridEditing,
  GridColumn,
  GridLayout,
  GridRowDetail,
  GridProps,
} from "smart-webcomponents-react/grid";

import { layout as dataLayout } from "./DefaultProps";

export interface ReactDataGridCustomProps extends GridProps {
  id?: string;
  dataSource: any[];
  columns: GridColumn[];
  pager?: GridPager;
  sorting?: GridSorting;
  editing?: GridEditing;
  appearance?: GridAppearance;
  behavior?: GridBehavior;
  paging?: GridPaging;
  layout?: GridLayout;
  dataSourceType?: any[];
  rowDetail?: GridRowDetail;
  onCellClick?: any;
}

function cloneObject(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

// Add Your Key
// Smart.License = "";

const ReactDataGrid = forwardRef<HTMLDivElement, ReactDataGridCustomProps>(
  (props, ref) => {
    const {
      id,
      dataSource,
      columns,
      pager,
      sorting,
      editing,
      appearance,
      behavior,
      paging,
      layout = dataLayout,
      dataSourceType,
      rowDetail,
      onCellClick,
      ...gridProps
    } = props;

    const layout1 = {
      rowHeight: 10,
    };

    const data = dataSource.map((item) => cloneObject(item));
    return (
      <div className="w-full h-full">
        <Grid
          id={id}
          layout={layout1}
          style={{height:"100%", width:"100%"}}
          dataSource={data}
          columns={columns}
          appearance={appearance}
          behavior={behavior}
          paging={paging}
          pager={pager}
          sorting={sorting}
          editing={editing}
          rowDetail={rowDetail}
          onCellClick={onCellClick}
        ></Grid>
      </div>
    );
  },
);

ReactDataGrid.displayName = "ReactDataGrid";

export default ReactDataGrid;
