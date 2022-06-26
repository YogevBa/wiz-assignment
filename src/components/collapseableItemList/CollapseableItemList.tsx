import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { Key } from 'react';
import { AdminsProps } from '../../pages/adminsPage/AdminPage';
import CollapseableItem from '../collapseableItem/CollapseableItem';
import Text from '../text/Text';

type CollpaseableListItemsProps = {
    data: any
}

const CollpaseableListItems = (props: CollpaseableListItemsProps) => {
    const { data } = props


    const renderCollapseableItems = data?.adminGroups?.map((itm: any, index: Key) => <CollapseableItem key={index} itemData={itm} />)
    return (
        <List
            sx={{ width: '100%', maxWidth: 400, minHeight: 390, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <Text text='Approvers' />
                </ListSubheader>
            }
        >
            {renderCollapseableItems}
        </List>
    );
}


export default CollpaseableListItems