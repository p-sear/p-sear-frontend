import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import RatingBar from "./RatingBar";

const HotelCard = () => {
    return (
      <Card className="w-full max-w-[96rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="relative">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          블랙.5성급.호텔
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          서울신라호텔
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다.
          3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.
        </Typography>

      <RatingBar></RatingBar>
        
        <a href="#" className="absolute bottom-4 right-4">
          <Button variant="text" className="flex items-center gap-2">
            더보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
export default HotelCard;
