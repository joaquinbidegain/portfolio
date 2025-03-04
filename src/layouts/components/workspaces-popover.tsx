import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';

import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export type WorkspacesPopoverProps = ButtonBaseProps & {
  data?: {
    id: string;
    name: string;
    logo: string;
  }[];
};

export function WorkspacesPopover({ data = [], sx, ...other }: WorkspacesPopoverProps) {
  const [workspace, setWorkspace] = useState(data[0]);

  const handleChangeWorkspace = (newValue: (typeof data)[number]) => {
    setWorkspace(newValue);
  };

  const renderAvatar = () => (
    <Box component="img" alt="Logo" src="/assets/images/logo.svg" sx={{ width: 24, height: 24, borderRadius: '50%' }} />
  );

  const renderLabel = (plan: string) => (
    <Label color={plan === 'Free' ? 'default' : 'info'}>{plan}</Label>
  );

  return (
    <Paper sx={{ py: 1.5, px: 0, borderRadius: 2, width: 260 }}>

      {/* Menú SIEMPRE visible */}
      <MenuList
        disablePadding
        sx={{
          p: 0,
          gap: 0.5,
          display: 'flex',
          flexDirection: 'column',
          [`& .${menuItemClasses.root}`]: {
            p: 1.5,
            gap: 1.5,
            borderRadius: 0.75,
            [`&.${menuItemClasses.selected}`]: {
              bgcolor: 'action.selected',
              fontWeight: 'fontWeightSemiBold',
            },
          },
        }}
      >
        {data.map((option) => (
          <MenuItem
            key={option.id}
            selected={option.id === workspace?.id}
            onClick={() => handleChangeWorkspace(option)}
          >
            {renderAvatar()}

            <Box component="span" sx={{ flexGrow: 1 }}>
              {option.name}
            </Box>

          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}