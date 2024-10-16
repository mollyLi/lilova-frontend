import Link from 'next/link';
import { Button } from '../ui/button';
function EmptyList({
  heading = '目前沒有任何商品',
  message = 'Keep exploring our products',
  btnText = '回首頁',
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) {
  return (
    <div className='mt-4'>
      <h2 className='text-xl font-bold'>{heading}</h2>
      <p className='text-lg'>{message}</p>
      <Button asChild className='mt-4 capitalize' size='lg'>
        <Link href='/'>{btnText}</Link>
      </Button>
    </div>
  );
}
export default EmptyList;
