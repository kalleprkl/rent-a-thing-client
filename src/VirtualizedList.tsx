import Box from "@mui/material/Box"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { useNavigate, useParams } from "react-router-dom"
import { FixedSizeList, ListChildComponentProps } from "react-window"

import React from "react"
import { AppData, QueryAction } from "./app/api"
import { UseQueryStateResult } from "@reduxjs/toolkit/dist/query/react/buildHooks"
import { skipToken, SkipToken } from "@reduxjs/toolkit/query/react"

const renderRow = (data: Array<AppData> | undefined, next: string) => (props: ListChildComponentProps<Array<AppData>>) => {
  if (!data) {
    return <p />
  }
  const { index, style } = props
  const navigate = useNavigate()
  const appDataObject = data[index]
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => navigate(`/${next}/${appDataObject.id}`)}>
        <ListItemText primary={`Item ${appDataObject.id}`} />
      </ListItemButton>
    </ListItem>
  )
}

interface VirtualizedListProps {
  //query: (arg0?: Array<AppData>) => UseQueryStateResult<QueryDefinition<Array<AppData>>, Array<AppData>>
  //query: () => UseQueryStateResult<any, any>,
  next: string,
  query: (...args: any) => any,
}

export default React.memo((props: VirtualizedListProps) => {
  const { query, next } = props
  const { id } = useParams()
  const params = useParams()
  console.log(params)
  let data: Array<AppData> | undefined
  if (id) {
    data = query(id).data
  } else {
    data = query().data
  }
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
        {renderRow(data, next)}
      </FixedSizeList>
    </Box>
  )
})
