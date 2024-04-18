import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

const CheckBox2 = () => {
  return (
    
    <Card className="max-h-52 max-w-4xl">
      <div className="flex flex-wrap justify-center scrollbar-thumb-blue-300 scrollbar-track-blue-50 scrollbar-thin h-auto overflow-y-scroll">
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <Typography variant="h5" className="text-center mb-4 m-2">숙소유형</Typography>
          <List>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    color="blue"
                    id="vertical-list-all"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  전체
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    color="blue"
                    id="vertical-list-hotel"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  호텔
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    color="blue"
                    id="vertical-list-motel"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  모텔
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    color="blue"
                    id="vertical-list-vacationCottage"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  펜션
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    color="blue"
                    id="vertical-list-resort"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  리조트
                </Typography>
              </label>
            </ListItem>
          </List>
          
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8">
          {/* 편의시설 */}
          <Typography variant="h5" className="text-center mb-4 m-2">객실 내 시설</Typography>
          <List>
            <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      color="blue"
                      id="vertical-list-pool"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    스파/월풀
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      color="blue"
                      id="vertical-list-pool2"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    객실/스파
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      color="blue"
                      id="vertical-list-ame"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    욕실용품
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      color="blue"
                      id="vertical-list-bar"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    미니바
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      color="blue"
                      id="vertical-list-sho"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                      객실샤워실
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      color="blue"
                      id="vertical-list-air"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                      에어컨
                  </Typography>
                </label>
              </ListItem>
          </List>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8">
          {/* 카테고리 */}
          <Typography variant="h5" className="text-center mb-4 m-2">카테고리</Typography>
          <List>
            {/* 카테고리 리스트 */}
          </List>
        </div>
      </div>
    </Card>
  );
};

export default CheckBox2;
