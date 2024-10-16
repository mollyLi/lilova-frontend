type NavLink = {
  href: string;
  label: string;
  adminAccessOnly: Boolean;
};

export const links: NavLink[] = [
  { href: '/admin/create', label: '上架商品', adminAccessOnly: true },
];
