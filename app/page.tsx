import Link from "next/link"
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className='text-3xl'>
      Welcome to HomePage!
      <Button variant='outline' size='lg' className='capitalize m-8'>Click me</Button>
      <Button asChild>
        <Link href="https://ui.shadcn.com/">Shadcn/ui</Link>
      </Button>
    </div>
  );
};

export default HomePage;