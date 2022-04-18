import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import * as React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { AppData } from "./app/api"
import { useFetchAllThingsQuery, UseQueryApi } from "./app/api"

interface VirtualizedListProps {
  api: UseQueryApi
}

export default function VirtualizedList(props: VirtualizedListProps) {
  const { data } = props.api()
  const renderRow = (props: ListChildComponentProps<Array<AppData>>) => {
    const { index, style } = props
    if (!data) {
      return <p/>
    }
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${data[index].id}`} />
        </ListItemButton>
      </ListItem>
    )
  }
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={data?.length ?? 0}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
