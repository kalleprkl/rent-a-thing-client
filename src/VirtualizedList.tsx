import Box from "@mui/material/Box"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { Navigate } from "react-router-dom"

import { FixedSizeList, ListChildComponentProps } from "react-window"

import React, { useEffect, useState } from "react"
import { skipToken } from "@reduxjs/toolkit/query/react"
import { AppData, Customer, useFetchAllCustomersQuery, useFetchAllThingsQuery, UseQueryApi } from "./app/api"

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
  path: string,
}

export default React.memo((props: VirtualizedListProps) => {
  const { path } = props
  let data: Array<AppData> | undefined
  data = useFetchAllCustomersQuery().data
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
