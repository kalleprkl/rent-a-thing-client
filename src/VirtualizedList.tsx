import Box from "@mui/material/Box"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { FixedSizeList, ListChildComponentProps } from "react-window"

import React from "react"
import { AppData } from "./app/api"
import { UseQueryStateResult } from "@reduxjs/toolkit/dist/query/react/buildHooks"

const renderRow = (data: Array<AppData> | undefined) => (props: ListChildComponentProps<Array<AppData>>) => {
  const { index, style } = props
  if (!data) {
    return <p />
  }
  const appDataObject = data[index]
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => { }}>
        <ListItemText primary={`Item ${appDataObject.id}`} />
      </ListItemButton>
    </ListItem>
  )
}

interface VirtualizedListProps {
  //query: (arg0?: Array<AppData>) => UseQueryStateResult<QueryDefinition<Array<AppData>>, Array<AppData>>
  query(arg0?: any): UseQueryStateResult<any, any>
}

export default React.memo((props: VirtualizedListProps) => {
  const { query } = props
  let data: Array<AppData> | undefined
  data = query().data
  return (
    <Box
      sx={{ width: "100%", height: 200, maxWidth: 360, bgcolor: "background.paper" }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={data?.length ?? 0}
        overscanCount={5}
      >
        {renderRow(data)}
      </FixedSizeList>
    </Box>
  )
})
