import Link from "next/link"
import LinksDropdown from './LinksDropdown';

function Navbar() {
  return (
    <section className=''>
        <nav className='flex flex-row justify-between text-stone-800 py-2 flex gap-4 items-center'>
          <h1 className='text-xl font-bold text-stone-800'>Nuan Nuan</h1>
          <div className='flex gap-4'>
            <Link href='/'>全部商品</Link>
            <Link href='/brands'>品牌瀏覽</Link>
          </div>
          <LinksDropdown />
        </nav>
    </section>
  );
}
export default Navbar;
