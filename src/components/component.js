import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ProSpan = styled('span')({
    display: 'inline-block',
    height: '1em',
    width: '1em',
    verticalAlign: 'middle',
    marginLeft: '0.3em',
    marginBottom: '0.08em',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 100,
        },
    },
};

const names = [
    'Food',
    'Travel',
    'Education',
    'Entertainment',
    'Others',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
function Label({
    componentName,
    valueType,
    isProOnly,
}) {
    const content = (
        <span>
            <strong>{componentName}</strong> for {valueType} editing
        </span>
    );

    if (isProOnly) {
        return (
            <Stack direction="row" spacing={0.5} component="span">
                <Tooltip title="Included on Pro package">
                    <a
                        href="https://mui.com/x/introduction/licensing/#pro-plan"
                        aria-label="Included on Pro package"
                    >
                        <ProSpan />
                    </a>
                </Tooltip>
                {content}
            </Stack>
        );
    }

    return content;
}

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    React.useEffect(() => {
        setOpen(props.open)
    }, [props.open])
    const addIncome = () => {
        setOpen(true);
    }
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <button className="addbutton" onClick={addIncome}>+Add Income</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form>
                        <Typography variant="h6" component="h2">
                            Add Expenses
                        </Typography>
                        <Box sx={{ ...style, '& .MuiTextField-root, & .MuiFormControl-root': { width: 'calc(50% - 8px)' } }}>
                            <Typography variant="h6" component="h2" marginBottom={2}>
                                Add Expenses
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                                <TextField id="title" label="Title" variant="outlined" />
                                <TextField id="price" label="Price" variant="outlined" />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="demo-multiple-name-label">Select Category</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        value={personName}
                                        onChange={handleChange}
                                        label="Select Category"
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Select Date"
                                        /*  value={selectedDate}
                                         onChange={(newValue) => {
                                             setSelectedDate(newValue);
                                         }} */
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <div style={{display: "flex"}}>
                         <button>Add Expense</button>
                         <button>Cancel</button>
                        </div>

                    </form>
                </Box>

            </Modal>
        </div>
    );
}