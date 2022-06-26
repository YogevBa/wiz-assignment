import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
import Person from '@mui/icons-material/Person';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { AdminsProps } from '../../pages/adminsPage/AdminPage';
import Text from '../text/Text';

type CollapseableItemProps = {
    itemData: {
        name: string
        admins: AdminsProps[]
    }
}

const CollpaseableItem = (props: CollapseableItemProps) => {
    const { itemData } = props
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const sumVotedAdmins = itemData.admins.filter(admin => admin.isVoted === true)
    const votedAdminsOutput = `${sumVotedAdmins.length.toString()} voted out of ${itemData.admins.length}`
    const renderSubItems = itemData.admins.map((admin: AdminsProps, index: React.Key) => {
        return (
            <ListItemButton key={index} sx={{ pl: 4 }}>
                <ListItemIcon>
                    <Person />
                </ListItemIcon>
                <ListItemText primary={admin.name} />
                <Text text={admin.recentAction} />
            </ListItemButton>
        )
    })
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <GroupIcon />
                </ListItemIcon>
                <ListItemText primary={itemData.name} />
                <Text text={votedAdminsOutput} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {renderSubItems}
                </List>
            </Collapse>
        </>
    );
}


export default CollpaseableItem