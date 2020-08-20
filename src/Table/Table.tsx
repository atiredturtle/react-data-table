import React, { useState } from "react";
import { Resizable, ResizableBox, ResizeCallbackData } from "react-resizable";
import "react-resizable/css/styles.css";

function DragHandle() {
  return (
    <span
      style={{
        cursor: "col-resize",
        width: "10px",
        float: "right",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "2px",
          background: "black",
        }}
      >
        {" "}
      </div>
    </span>
  );
}

type TableProps = {
  rows: string[][];
};
const borderStyle = { border: "0px solid black" };
export function Table(props: TableProps) {
  const { rows } = props;
  const defaultColWidth = 200;
  const [columnWidths, setColumnWidths] = useState(
    rows[0].map(() => defaultColWidth)
  );

  const resizeColumn = (columnIndex: number, width: number) => {
    setColumnWidths(
      columnWidths.map((v, ind) => (ind === columnIndex ? width : v))
    );
  };

  return (
    <table style={{ ...borderStyle }}>
      {rows.map((row) => (
        <tr style={{ ...borderStyle }}>
          {row.map((col, colInd) => (
            // <ResizableBox width={200} height={20}>
            <td style={{ ...borderStyle, width: columnWidths[colInd] }}>
              <ResizableBox
                width={columnWidths[colInd]}
                resizeHandles={["e"]}
                handle={DragHandle}
                height={30}
                onResize={(_, data: ResizeCallbackData) => {
                  console.log("data", data.size);
                  resizeColumn(colInd, data.size.width);
                }}
              >
                {col}
                {/*  <span style={{ width: "100%", background: "red" }}>{col}</span>*/}
              </ResizableBox>
            </td>
            // </ResizableBox>
          ))}
        </tr>
      ))}
    </table>
  );
}

/* Options for data design
 * 1. columns = string[], rows = {[key: columns]: any}
 * 2. We can let them do it...
 *  > They provide columns
 */
