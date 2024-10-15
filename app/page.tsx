import Link from "next/link"
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className='text-3xl'>
      Welcome to HomePage!
      <Button asChild className='capitalize m-8'>
        <Link href="/products">商品列表頁</Link>
      </Button>
      <Button asChild>
        <Link href="/products/create">上架新商品</Link>
      </Button>
    </div>
  );
};

export default HomePage;