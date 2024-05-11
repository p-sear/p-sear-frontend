import {
  Card,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';

const CheckBox3 = () => {
  return (
    <Card className='w-full max-w-[75rem] bg-blue-100'>
      <List className='flex-row'>
        <ListItem className='p-0'>
          <label
            htmlFor='horizontal-list-react'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix className='mr-3'>
              <Checkbox
                id='horizontal-list-react'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography color='blue-gray' className='font-medium'>
              전체
            </Typography>
          </label>
        </ListItem>
        <ListItem className='p-0'>
          <label
            htmlFor='horizontal-list-vue'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix className='mr-3'>
              <Checkbox
                id='horizontal-list-vue'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography color='blue-gray' className='font-medium'>
              호텔
            </Typography>
          </label>
        </ListItem>
        <ListItem className='p-0'>
          <label
            htmlFor='horizontal-list-svelte'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix className='mr-3'>
              <Checkbox
                id='horizontal-list-svelte'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography color='blue-gray' className='font-medium'>
              모텔
            </Typography>
          </label>
        </ListItem>
        <ListItem className='p-0'>
          <label
            htmlFor='horizontal-list-react'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix className='mr-3'>
              <Checkbox
                id='horizontal-list-react'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography color='blue-gray' className='font-medium '>
              펜션
            </Typography>
          </label>
        </ListItem>
        <ListItem className='p-0'>
          <label
            htmlFor='horizontal-list-vue'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix className='mr-3'>
              <Checkbox
                id='horizontal-list-vue'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography color='blue-gray' className='font-medium'>
              리조트
            </Typography>
          </label>
        </ListItem>
        <ListItem className='p-0'>
          <label
            htmlFor='horizontal-list-svelte'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix className='mr-3'>
              <Checkbox
                id='horizontal-list-svelte'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography color='blue-gray' className='font-medium'>
              홈&빌라
            </Typography>
          </label>
        </ListItem>
        <ListItem className='p-0'>
          <label
            htmlFor='horizontal-list-react'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix className='mr-3'>
              <Checkbox
                id='horizontal-list-react'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography color='blue-gray' className='font-medium'>
              게스트
            </Typography>
          </label>
        </ListItem>
        <ListItem className='p-0'>
          <label
            htmlFor='horizontal-list-vue'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix className='mr-3'>
              <Checkbox
                id='horizontal-list-vue'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography color='blue-gray' className='font-medium'>
              한옥
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
};

export default CheckBox3;
