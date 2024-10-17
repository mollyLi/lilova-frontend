import { RxAvatar } from "react-icons/rx";
import { fetchProfileImage } from '@/utils/actions';
async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
    );
  }
  return <RxAvatar className='w-6 h-6 rounded-full text-gray-400' />;
}
export default UserIcon;
