import Link from "next/link"
import LinksDropdown from './LinksDropdown';

function Navbar() {
  return (
    <section className=''>
        <nav className='text-stone-400 text-lg py-2 flex gap-4 items-center'>
          <Link href='/'>全部商品 All</Link>
          <Link href='/'>品牌瀏覽 Brands</Link>
          <LinksDropdown />
        </nav>
    </section>
  );
}
export default Navbar;
