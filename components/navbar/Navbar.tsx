import Link from "next/link"

function Navbar() {
  return (
    <section className='border-b'>
      <div className='py-8'>
        <Link href='/'>
          <h1 className="text-4xl font-bold text-center">LiLova</h1>
        </Link>
        </div>
        <nav className='text-stone-400 text-lg py-2 flex gap-4 items-center'>
          <Link href='/'>全部商品 All</Link>
          <Link href='/'>品牌瀏覽 Brands</Link>
          <Link href='/products/create'>上架商品 Sell</Link>
        </nav>
    </section>
  );
}
export default Navbar;
