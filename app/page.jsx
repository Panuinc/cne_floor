import {redirect} from 'next/navigation';

export default function page() {
  redirect('/en');      // เปลี่ยนเป็น /th ถ้าอยากให้ไทยเป็นค่าตั้งต้น
}
