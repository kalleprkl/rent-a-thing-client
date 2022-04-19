import Box from "@mui/material/Box"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { useLocation } from "react-router-dom"

import { FixedSizeList, ListChildComponentProps } from "react-window"

import React, { useEffect, useState } from "react"
import { AppData, Customer, useFetchAllCustomersQuery, useFetchAllThingsQuery, UseQueryApi } from "./app/api"
import { ResultTypeFrom } from "@reduxjs/toolkit/dist/query/endpointDefinitions"

const renderRow = (data: Array<AppData> | undefined) => (props: ListChildComponentProps<Array<AppData>>) => {
  const { index, style } = props
  if (!data) {
    return <p />
  }
  const appDataObject = data[index]
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => { }}>
        <ListItemText primary={`Item ${data[index].id}`} />
      </ListItemButton>
    </ListItem>
  )
}

//interface VirtualizedListProps {
//  showAction: UseQueryApi,
//}

const mapLocationAction: { [location: string]: UseQueryApi } = {
  "Customers": useFetchAllCustomersQuery
}

//type QueryAction = (arg0?: string) => rentalApi.

//export default function VirtualizedList(props: VirtualizedListProps) {
export default function VirtualizedList() {
  const location = useLocation()
  const [data, setData] = useState<Array<AppData>>([])
  useEffect(
    () => {
      let resData: Array<AppData> | undefined
      if (location.pathname === "Customers") {
        const response = useFetchAllCustomersQuery()
        resData = response.data
      }
      if (resData) {
        setData(resData)
      }
    },
    [location]
  )
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
  );
}
